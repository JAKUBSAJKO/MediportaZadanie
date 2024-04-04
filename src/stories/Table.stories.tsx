import { StoryObj } from "@storybook/react";
import { RefObject } from "react";
import Table from "../components/Table/Table";

const meta = {
  title: "All/Components/Table",
  component: Table,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = (args: { tableRef: RefObject<HTMLTableElement> }) => <Table {...args} />;
Base.args = {
  tableRef: { current: null },
};
