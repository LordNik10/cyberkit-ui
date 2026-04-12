import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  ArrowRightIcon,
  ArrowLeftIcon,
  PlusIcon,
  CornerDownLeft,
} from "lucide-react";

import { Button } from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    startIcon: {
      options: [
        "none",
        "arrow-right",
        "arrow-left",
        "plus",
        "corner-down-left",
      ],
      mapping: {
        none: undefined,
        "arrow-right": <ArrowRightIcon />,
        "arrow-left": <ArrowLeftIcon />,
        plus: <PlusIcon />,
        "corner-down-left": <CornerDownLeft />,
      },
      control: { type: "select" },
    },
    endIcon: {
      options: [
        "none",
        "arrow-right",
        "arrow-left",
        "plus",
        "corner-down-left",
      ],
      mapping: {
        none: undefined,
        "arrow-right": <ArrowRightIcon />,
        "arrow-left": <ArrowLeftIcon />,
        plus: <PlusIcon />,
        "corner-down-left": <CornerDownLeft />,
      },
      control: { type: "select" },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Primary",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary",
    variant: "secondary",
  },
};

export const OutlinedPrimary: Story = {
  args: {
    label: "Outlined",
    variant: "outlined-primary",
  },
};

export const OutlinedSecondary: Story = {
  args: {
    label: "Outlined",
    variant: "outlined-secondary",
  },
};
