import { Pagination } from "@mui/material";
import { StoryObj } from "@storybook/react";

const meta = {
  title: "All/Components/Pagination",
  component: Pagination,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    count: 25,
    page: 1,
  },
};
