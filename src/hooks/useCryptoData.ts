import { useState, useEffect } from "react";
import { fetchInitialData, connectToWebSocket } from "@/services/api";
import { CoinData } from "..";

/**
 * Custom hook to manage cryptocurrency data, including fetching initial data and live updates via WebSocket.
 * Handles sorting, filtering, and managing the order of data.
 *
 * @returns {{
 *   filteredAndSortedData: Array<CoinData>;
 *   order: "asc" | "desc";
 *   orderBy: keyof CoinData;
 *   filter: string;
 *   handleRequestSort: (event: React.MouseEvent<unknown>, property: keyof CoinData) => void;
 *   handleFilterChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
 * }}
 */

const useCryptoData = () => {
  const [prices, setPrices] = useState<Record<string, CoinData>>({});
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const [orderBy, setOrderBy] = useState<keyof CoinData>("price");
  const [filter, setFilter] = useState<string>("");

  /**
   * Fetches the initial cryptocurrency data and sets it in state.
   */

  const loadData = async () => {
    const initialData = await fetchInitialData();
    setPrices(initialData);
  };

  useEffect(() => {
    loadData();

    const intervalId = setInterval(loadData, 3600000);

    const disconnect = connectToWebSocket((data) => {
      setPrices((prevPrices) => {
        const updatedPrices = { ...prevPrices };
        for (const [key, value] of Object.entries(data)) {
          if (updatedPrices[key]) {
            const previousPrice = Number(prevPrices[key]?.price);
            const currentPrice = Number(value);

            updatedPrices[key] = {
              ...updatedPrices[key],
              price: currentPrice.toFixed(2),
              priceChange: currentPrice - previousPrice,
              previousPrice,
            };
          }
        }
        return updatedPrices;
      });
    });

    return () => {
      disconnect();
      clearInterval(intervalId);
    };
  }, []);

  /**
   * Handles sorting requests.
   *
   * @param {React.MouseEvent<unknown>} event - The mouse event.
   * @param {keyof CoinData} property - The property to sort by.
   */
  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof CoinData
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  /**
   * Handles the change in the filter input.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event - The change event from the input.
   */

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value.toLowerCase());
  };

  const filteredAndSortedData = Object.keys(prices)
    .map((key) => ({ ...prices[key], id: key }))
    .filter((coin) => coin.symbol.toLowerCase().includes(filter))
    .sort((a, b) => {
      //@ts-ignore
      const aValue = a[orderBy];
      //@ts-ignore
      const bValue = b[orderBy];

      if (typeof aValue === "number" && typeof bValue === "number") {
        return order === "desc" ? bValue - aValue : aValue - bValue;
      } else if (typeof aValue === "string" && typeof bValue === "string") {
        return order === "desc"
          ? bValue.localeCompare(aValue)
          : aValue.localeCompare(bValue);
      } else {
        return 0;
      }
    });

  return {
    filteredAndSortedData,
    order,
    orderBy,
    filter,
    handleRequestSort,
    handleFilterChange,
  };
};

export default useCryptoData;
