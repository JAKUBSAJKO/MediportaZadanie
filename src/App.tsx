import { Container, Pagination } from "@mui/material";
import { useState } from "react";
import Header from "./components/Header/Header";
import Table from "./components/Table/Table";

export default function App() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [size, setSize] = useState(10);
  const [sort, setSort] = useState("popular");
  const [order, setOrder] = useState("desc");

  return (
    <Container maxWidth="xl" sx={{ padding: { xs: "16px", md: "64px 16px" } }}>
      <Header
        size={size}
        setSize={setSize}
        setPageSize={setPageSize}
        sort={sort}
        setSort={setSort}
        order={order}
        setOrder={setOrder}
      />
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
