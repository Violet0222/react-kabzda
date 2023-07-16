import { Select } from "./Select";
import { action } from "@storybook/addon-actions";
import { useState } from "react";

export default {
  title: "Select stories",
  component: Select,
};

export const SelectMode = () => {
  const [value, setValue] = useState(2);

  return (
    <Select
      value={value}
      onChange={setValue}
      items={[
        { title: "Ann", value: 1 },
        { title: "Kate", value: 2 },
        { title: "Alice", value: 3 },
      ]}
    />
  );
};

export const WithoutValueSelectMode = () => {
  const [value, setValue] = useState(null);
  return (
    <Select
      value={value}
      onChange={setValue}
      items={[
        { title: "Ann", value: 1 },
        { title: "Kate", value: 2 },
        { title: "Alice", value: 3 },
      ]}
    />
  );
};
