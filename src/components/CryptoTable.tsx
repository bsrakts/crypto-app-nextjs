import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Paper,
  TableSortLabel,
  TextField,
} from "@mui/material";
import useCryptoData from "@/hooks/useCryptoData";
import CryptoTableRow from "./Common/TableRow";

const CryptoTable: React.FC = () => {
  const {
    filteredAndSortedData,
    order,
    orderBy,
    filter,
    handleRequestSort,
    handleFilterChange,
  } = useCryptoData();

  return (
    <div>
      <div className="flex justify-end">
        <TextField
          label="Search.."
          variant="outlined"
          value={filter}
          onChange={handleFilterChange}
          className="mb-4 placeholder:!text-secondary w-1/6"
        />
      </div>
      <TableContainer component={Paper}>
        <Table aria-label="crypto table">
          <TableHead>
            <TableRow className="!bg-primary">
              <TableCell>Crypto</TableCell>
              <TableCell sortDirection={orderBy === "price" ? order : false}>
                <TableSortLabel
                  active={orderBy === "price"}
                  direction={orderBy === "price" ? order : "asc"}
                  onClick={(e) => handleRequestSort(e, "price")}
                >
                  Price (USD)
                </TableSortLabel>
              </TableCell>
              <TableCell>Market Value (B USD)</TableCell>
              <TableCell
                sortDirection={orderBy === "change24h" ? order : false}
              >
                <TableSortLabel
                  active={orderBy === "change24h"}
                  direction={orderBy === "change24h" ? order : "asc"}
                  onClick={(e) => handleRequestSort(e, "change24h")}
                >
                  24h Change
                </TableSortLabel>
              </TableCell>
              <TableCell>Price Change</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredAndSortedData.map((row) => (
              <CryptoTableRow key={row.id} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CryptoTable;
