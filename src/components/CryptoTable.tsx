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
      <TextField
        label="Filter Cryptos"
        variant="outlined"
        value={filter}
        onChange={handleFilterChange}
        style={{ marginBottom: "20px" }}
      />
      <TableContainer component={Paper}>
        <Table aria-label="crypto table">
          <TableHead className="">
            <TableRow>
              <TableCell>Crypto</TableCell>
              <TableCell></TableCell>
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
              <TableCell></TableCell>
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
