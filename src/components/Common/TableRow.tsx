import React, { useEffect, useState, useRef } from "react";
import { TableRow, TableCell } from "@mui/material";
import { styled } from "@mui/system";
import { CoinData } from "@/index";
import Image from "next/image";
import { debounce } from "lodash";
import { Sparklines, SparklinesLine } from "react-sparklines";

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

      setPriceHistory((prevHistory) => {
        const newHistory = [...prevHistory, currentPrice];
        return newHistory.length > 20 ? newHistory.slice(1) : newHistory;
      });

      previousPriceRef.current = currentPrice;

      const timeout = setTimeout(() => setChangeType("neutral"), 2000);
      return () => clearTimeout(timeout);
    }
  }, [row.price]);

  return (
    <StyledTableRow changeType={changeType}>
      <TableCell>
        <Image
          src={`https://cdn.bilira.co/symbol/svg/${row.symbol.toLowerCase()}.svg`}
          alt={`${row.symbol} icon`}
          width={24}
          height={24}
          loading="lazy"
          objectFit="contain"
          className="rounded-full"
        />
        {row.symbol.toUpperCase()}
      </TableCell>
      <TableCell>{row.name}</TableCell>
      <TableCell>{row.price}</TableCell>
      <TableCell>{row.marketValue}</TableCell>
      <TableCell
        style={{
          color: Number(row.change24h) >= 0 ? "green" : "red",
        }}
      >
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
