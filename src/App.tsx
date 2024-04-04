import { Container, Pagination } from "@mui/material";
import { useRef } from "react";
import Header from "./components/Header/Header";
import Table from "./components/Table/Table";
import { useGlobalStore } from "./stores/globalStore";

export default function App() {
  const { page, setPage } = useGlobalStore();

  const tableRef = useRef<HTMLTableElement>(null);

  return (
    <Container maxWidth="xl" sx={{ padding: { xs: "16px", md: "64px" } }}>
      <Header />
      <Table tableRef={tableRef} />
      <Pagination
        count={25}
        color="primary"
        sx={{ display: "flex", justifyContent: "center" }}
        page={page}
        onChange={(_, value: number) => {
          setPage(value);
          tableRef.current?.scrollIntoView({ behavior: "smooth" });
        }}
      />
    </Container>
  );
}
