import React, { useEffect, useState, useRef } from "react";
import { TableRow, TableCell } from "@mui/material";
import { styled } from "@mui/system";
import { CoinData } from "@/index";
import Image from "next/image";
import SouthWestIcon from "@mui/icons-material/SouthWest";
import { Sparklines, SparklinesLine } from "react-sparklines";
import NorthEastIcon from "@mui/icons-material/NorthEast";

interface CryptoTableRowProps {
  row: CoinData;
}

const StyledTableRow = styled(TableRow)<{
  changeType: "positive" | "negative" | "neutral";
}>`
  background-color: ${({ changeType }) =>
    changeType === "positive"
      ? "#d4edda"
      : changeType === "negative"
      ? "#f8d7da"
      : "transparent"};
  transition: background-color 0.5s ease-in-out;
`;

/**
 * A table row component for displaying cryptocurrency data.
 * It updates the background color based on price changes and renders a sparkline for price history.
 *
 * @param {CryptoTableRowProps} props - The properties passed to the component.
 * @returns {JSX.Element} The rendered table row.
 */

const CryptoTableRow: React.FC<CryptoTableRowProps> = ({ row }) => {
  const [priceHistory, setPriceHistory] = useState<number[]>(
    row.priceHistory || []
  );
  const [changeType, setChangeType] = useState<
    "positive" | "negative" | "neutral"
  >("neutral");

  const previousPriceRef = useRef(Number(row.previousPrice ?? row.price));

  useEffect(() => {
    const currentPrice = Number(row.price);
    const prevPrice = previousPriceRef.current;

    if (currentPrice !== prevPrice) {
      if (currentPrice > prevPrice) {
        setChangeType("positive");
      } else if (currentPrice < prevPrice) {
        setChangeType("negative");
      } else {
        setChangeType("neutral");
      }

      // Update price history
      setPriceHistory((prevHistory) => {
        const newHistory = [...prevHistory, currentPrice];
        return newHistory.length > 20 ? newHistory.slice(1) : newHistory;
      });

      previousPriceRef.current = currentPrice;
      // Reset the change type after 2 seconds
      const timeout = setTimeout(() => setChangeType("neutral"), 2000);
      return () => clearTimeout(timeout);
    }
  }, [row.price]);

  return (
    <StyledTableRow changeType={changeType}>
      <TableCell className="w-1/2">
        <div className="flex items-center gap-x-4">
          <Image
            src={`https://cdn.bilira.co/symbol/svg/${row.symbol.toLowerCase()}.svg`}
            alt={`${row.symbol} icon`}
            width={36}
            height={36}
            loading="lazy"
            objectFit="contain"
            className="rounded-full"
          />
          <div className="flex flex-col text-neutral-500">
            <span className="">
              <b className="text-blue-900">{row.symbol.toUpperCase()}</b> / USDT
            </span>
            {row.name}
          </div>
        </div>
      </TableCell>
      <TableCell>
        <b className="text-blue-900 text-lg">{row.price}</b>{" "}
        <small className="text-neutral-500">USDT</small>
      </TableCell>
      <TableCell>
        <b className="text-blue-900 text-lg">
          {Number(row.marketValue) >= 1e12
            ? `${(Number(row.marketValue) / 1e12).toFixed(2)}T`
            : Number(row.marketValue) >= 1e9
            ? `${(Number(row.marketValue) / 1e9).toFixed(2)}B`
            : Number(row.marketValue) >= 1e6
            ? `${(Number(row.marketValue) / 1e6).toFixed(2)}M`
            : `${Number(row.marketValue).toFixed(2)}`}
        </b>
        <small className="text-neutral-500 ml-1">USDT</small>
      </TableCell>
      <TableCell
        style={{
          color: Number(row.change24h) >= 0 ? "green" : "red",
        }}
      >
        {Number(row.change24h) >= 0 ? <NorthEastIcon /> : <SouthWestIcon />}
        {row.change24h}%
      </TableCell>
      <TableCell>
        {priceHistory.length > 0 ? (
          <Sparklines data={priceHistory} limit={20}>
            <SparklinesLine
              color={Number(row.change24h) >= 0 ? "green" : "red"}
            />
          </Sparklines>
        ) : (
          <Sparklines data={[0, 0, 0]} limit={3}>
            <SparklinesLine
              color={Number(row.change24h) >= 0 ? "green" : "red"}
              style={{
                strokeWidth: 2,
                strokeLinecap: "round",
              }}
            />
          </Sparklines>
        )}
      </TableCell>
    </StyledTableRow>
  );
};

export default CryptoTableRow;
