import { TextField } from "@mui/material";
import { StoryObj } from "@storybook/react";
import { ErrorMessages } from "../constants";

const meta = {
  title: "All/Components/NumberInput",
  component: TextField,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    label: "Liczba elementów na stronie",
    variant: "outlined",
    type: "number",
  },
};

export const Error: Story = {
  args: {
    label: "Liczba elementów na stronie",
    variant: "outlined",
    type: "number",
    error: true,
    helperText: ErrorMessages.pageSizeInput,
  },
};
