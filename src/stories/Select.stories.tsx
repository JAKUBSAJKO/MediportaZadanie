import { SelectProps } from "@mui/material";
import { StoryObj } from "@storybook/react";
import { useState } from "react";
import Select, { SelectItem } from "../components/Select/Select";

const meta = {
  title: "All/Components/Select",
  component: Select,
};

export default meta;

type Story = StoryObj<typeof meta>;

const sampleData: SelectItem[] = [
  { id: 1, name: "Option 1", value: "option1" },
  { id: 2, name: "Option 2", value: "option2" },
  { id: 3, name: "Option 3", value: "option3" },
];

const SelectWithHooks = () => {
  const [value, setValue] = useState("Option 1");

  return <Select value={value} setValue={setValue} data={sampleData} />;
};

export const Base: Story = (args: SelectProps) => <SelectWithHooks {...args} />;
Base.args = {
  value: "Option 1",
  setValue: (arg: string) => {},
  data: sampleData,
};
