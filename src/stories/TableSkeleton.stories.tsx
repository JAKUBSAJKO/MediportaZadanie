import { StoryObj } from "@storybook/react";
import TableSkeleton from "../components/Table/components/TableSkeleton";

const meta = {
  title: "All/Components/Table Skeleton",
  component: TableSkeleton,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    length: 10,
  },
};
