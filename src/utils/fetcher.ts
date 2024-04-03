export const fetcher = async (url: string) => {
  const res = await fetch(url);

  if (!res.ok) {
    const data = await res.json();
    const error = new Error(data.error_message);
    throw error;
  }

  return res.json();
};
