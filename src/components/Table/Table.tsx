import Paper from "@mui/material/Paper";
import MUITable from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import useSWR from "swr";
import { baseURL } from "../../constants";
import { Tag } from "../../types";
import { fetcher } from "../../utils/fetcher";

interface TableProps {
  page: number;
  pageSize: number;
  sort: string;
}

export default function Table({ page, pageSize, sort }: TableProps) {
  const { data, error, isLoading } = useSWR(
    `${baseURL}/tags?page=${page}&pagesize=${pageSize}&order=desc&sort=${sort}&site=stackoverflow`,
    fetcher
  );

  if (error) return <div>Error: {error.message}</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <TableContainer component={Paper}>
      <MUITable sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell align="left" sx={{ fontWeight: "bold", width: "50%" }}>
              Nazwa taga
            </TableCell>
            <TableCell align="left" sx={{ fontWeight: "bold", width: "50%" }}>
              Liczba powiązanych postów
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data &&
            data.items.map((item: Tag) => (
              <TableRow key={item.name}>
                <TableCell align="left">{item.name}</TableCell>
                <TableCell align="left">{item.count}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </MUITable>
    </TableContainer>
  );
}
