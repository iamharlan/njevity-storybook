import { Button } from "./Button"

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
export default {
  title: "Components/Button",
  tags: ["autodocs"],
  render: (args) => Button(args),
  argTypes: {
    backgroundColor: { control: "color" },
    onClick: { action: "onClick" },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    icon: {
      control: { type: "select" },
      options: ["search", "cart", "logo"],
    },
  },
}

// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args

export const Small = {
  args: {
    size: "small",
    label: "Small Button",
  },
}

export const SmallPrimary = {
  args: {
    primary: true,
    size: "small",
    label: "Small Button",
  },
}

export const Medium = {
  args: {
    size: "medium",
    label: "Medium Button",
  },
}

export const MediumPrimary = {
  args: {
    primary: true,
    size: "medium",
    label: "Medium Button",
  },
}

export const Large = {
  args: {
    size: "large",
    label: "Large Button",
  },
}

export const LargePrimary = {
  args: {
    primary: true,
    size: "large",
    label: "Large Button",
  },
}

export const AppleIcon = {
  args: {
    icon: "logo",
    label: "",
  },
}

export const SearchIcon = {
  args: {
    size: "small",
    label: "",
    icon: "search",
  },
}

export const CartIcon = {
  args: {
    size: "small",
    label: "",
    icon: "cart",
  },
}
