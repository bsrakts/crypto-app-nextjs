import { TableRow, styled } from "@mui/material";

export const StyledTableRow = styled(TableRow)<{
  change: number;
  isFlashing: boolean;
}>`
  background-color: ${({ isFlashing, change }) =>
    isFlashing
      ? change > 0
        ? "#d4edda"
        : change < 0
        ? "#f8d7da"
        : "transparent"
      : "transparent"};
  transition: background-color 0.5s ease-in-out;
`;
