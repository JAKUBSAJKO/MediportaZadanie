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

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Table() {
  const { data, error, isLoading } = useSWR(
    `${baseURL}/tags?page=1&pagesize=10&order=desc&sort=popular&site=stackoverflow`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <TableContainer component={Paper}>
      <MUITable sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left" sx={{ fontWeight: "bold" }}>
              Nazwa taga
            </TableCell>
            <TableCell align="left" sx={{ fontWeight: "bold" }}>
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
