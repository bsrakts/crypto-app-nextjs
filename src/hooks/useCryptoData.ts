import { useState, useEffect } from "react";
import { fetchInitialData, connectToWebSocket } from "@/services/api";
import { CoinData } from "..";

const useCryptoData = () => {
  const [prices, setPrices] = useState<Record<string, CoinData>>({});
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const [orderBy, setOrderBy] = useState<keyof CoinData>("price");
  const [filter, setFilter] = useState<string>("");

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
              priceChange: currentPrice - previousPrice, // Değişikliği hesapla
              previousPrice, // Önceki fiyatı sakla
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

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof CoinData
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

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
