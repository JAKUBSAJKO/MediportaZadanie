import { Container } from "@mui/material";
import Table from "./components/Table/Table";

export default function App() {
  return (
    <Container maxWidth="xl" sx={{ padding: { xs: "16px", md: "64px 16px" } }}>
      <Table />
    </Container>
  );
}
