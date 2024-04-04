import { Button } from "@mui/material";
import { StoryObj } from "@storybook/react";

const meta = {
  title: "All/Components/Button",
  component: Button,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    children: "Base",
    variant: "contained",
    size: "large",
  },
};
