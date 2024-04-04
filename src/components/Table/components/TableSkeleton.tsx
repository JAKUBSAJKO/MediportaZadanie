import { Skeleton, TableCell, TableRow } from "@mui/material";

interface TableSkeletonProps {
  length?: number;
}

export default function TableSkeleton({ length = 10 }: TableSkeletonProps) {
  return (
    <>
      {Array.from({ length }).map((_, index) => (
        <TableRow key={index}>
          <TableCell align="left">
            <Skeleton variant="text" width={160} />
          </TableCell>
          <TableCell align="left">
            <Skeleton variant="text" width={160} />
          </TableCell>
        </TableRow>
      ))}
    </>
  );
}
