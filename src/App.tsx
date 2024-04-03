import { Container } from "@mui/material";
import useSWR from "swr";
import { baseURL } from "./constants";
import { Tag } from "./types";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function App() {
  const { data, error, isLoading } = useSWR(
    `${baseURL}/tags?page=1&pagesize=10&order=desc&sort=popular&site=stackoverflow`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <Container maxWidth="xl" sx={{ padding: "64px 0" }}>
      {data &&
        data.items.map((item: Tag) => (
          <div key={item.name}>
            <h1>{item.name}</h1>
            <p>{item.count}</p>
          </div>
        ))}
    </Container>
  );
}
