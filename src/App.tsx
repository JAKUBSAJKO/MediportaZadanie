import {
  Button,
  Container,
  FormControl,
  MenuItem,
  Pagination,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { ChangeEvent, useState } from "react";
import Table from "./components/Table/Table";

export default function App() {
  const [pageSize, setPageSize] = useState(10);
  const [size, setSize] = useState(10);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);
  const [sort, setSort] = useState("popular");
  const [order, setOrder] = useState("desc");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const parsedNumber = parseInt(inputValue);
    if (!isNaN(parsedNumber)) {
      setSize(parsedNumber);
    }
  };

  const handleOnClick = () => {
    if (size > 100) {
      setError(true);
    } else if (size < 1) {
      setError(true);
    } else {
      setPageSize(size);
      setError(false);
    }
  };

  const handleChangeBySort = (event: SelectChangeEvent) => {
    setSort(event.target.value);
  };

  const handleChangeByOrder = (event: SelectChangeEvent) => {
    setOrder(event.target.value);
  };

  return (
    <Container maxWidth="xl" sx={{ padding: { xs: "16px", md: "64px 16px" } }}>
      <TextField
        label="Liczba elementów na stronie"
        type="number"
        sx={{ minWidth: 200 }}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{ min: 1, max: 100 }}
        value={size}
        onChange={handleInputChange}
        error={error}
        helperText={error && "Wprowadź liczbę z zakresu od 1 do 100."}
      />
      <Button variant="contained" size="large" onClick={handleOnClick}>
        Zmień
      </Button>
      <FormControl sx={{ mx: 1, minWidth: 120 }}>
        <Select id="select-sort" value={sort} onChange={handleChangeBySort}>
          <MenuItem value="popular">Popularność</MenuItem>
          <MenuItem value="activity">Aktywność</MenuItem>
          <MenuItem value="name">Alfabetycznie</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ mx: 1, minWidth: 120 }}>
        <Select id="select-order" value={order} onChange={handleChangeByOrder}>
          <MenuItem value="desc">Malejąco</MenuItem>
          <MenuItem value="asc">Rosnąco</MenuItem>
        </Select>
      </FormControl>
      <Table page={page} pageSize={pageSize} sort={sort} order={order} />
      <Pagination
        count={25}
        color="primary"
        sx={{ display: "flex", justifyContent: "center", my: 2 }}
        page={page}
        onChange={(_, value: number) => {
          setPage(value);
        }}
      />
    </Container>
  );
}
