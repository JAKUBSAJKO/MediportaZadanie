import { Button, Container, Pagination, TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";
import Table from "./components/Table/Table";

export default function App() {
  const [pageSize, setPageSize] = useState(10);
  const [size, setSize] = useState(10);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);

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
      <Table page={page} pageSize={pageSize} />
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
