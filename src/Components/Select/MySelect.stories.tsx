import { Select } from "./Select";
import { useState } from "react";
import { MySelect } from "./MySelect";

export default {
  title: "My select stories",
  component: MySelect,
};

export const MySelectMode = () => {
  const [value, setValue] = useState(2);

  return (
    <MySelect
      value={value}
      onChange={setValue}
      items={[
        { title: "Cat", value: 1 },
        { title: "Dog", value: 2 },
        { title: "Goose", value: 3 },
      ]}
    />
  );
};
