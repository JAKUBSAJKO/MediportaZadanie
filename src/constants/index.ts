export const BaseURL = "https://api.stackexchange.com/2.3";

export const ErrorMessages = {
  pageSizeInput: "Wprowadź liczbę z zakresu od 1 do 100.",
};

export const DefaultValues = {
  page: 1,
  pageSize: 10,
};

export const SortValues = {
  popular: "popular",
  activity: "activity",
  name: "name",
};

export const OrderValues = {
  desc: "desc",
  asc: "asc",
};

export const SortArray = [
  { id: 1, name: "Popularność", value: SortValues.popular },
  { id: 2, name: "Aktywność", value: SortValues.activity },
  { id: 3, name: "Alfabetycznie", value: SortValues.name },
];

export const OrderArray = [
  { id: 1, name: "Malejąco", value: OrderValues.desc },
  { id: 2, name: "Rosnąco", value: OrderValues.asc },
];
