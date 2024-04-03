import { create } from "zustand";
import { DefaultValues, OrderValues, SortValues } from "../constants";

interface GlobalStore {
  page: number;
  setPage: (newPageNumber: number) => void;
  pageSize: number;
  setPageSize: (newPageSizeNumber: number) => void;
  sort: string;
  setSort: (newSortValue: string) => void;
  order: string;
  setOrder: (newOrderValue: string) => void;
}

export const useGlobalStore = create<GlobalStore>()((set) => ({
  page: DefaultValues.page,
  setPage: (newPageNumber) => set(() => ({ page: newPageNumber })),
  pageSize: DefaultValues.pageSize,
  setPageSize: (newPageSizeNumber) => set(() => ({ pageSize: newPageSizeNumber })),
  sort: SortValues.popular,
  setSort: (newSortValue) => set(() => ({ sort: newSortValue })),
  order: OrderValues.desc,
  setOrder: (newOrderValue) => set(() => ({ order: newOrderValue })),
}));
