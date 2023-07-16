import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { ControlledAccordion } from "./Accordion";

export default {
  title: "Accordion stories",
  component: ControlledAccordion,
};

const callback = action("collapse or uncollapse was clicked");
const onClickCallback = action("some item was clicked");

export const MenuCollapsedMode = () => (
  <ControlledAccordion
    title={"Menu"}
    collapsed={true}
    onChange={callback}
    items={[]}
    onClick={onClickCallback}
  />
);

export const UserUncollapsedMode = () => (
  <ControlledAccordion
    title={"Users"}
    collapsed={false}
    onChange={callback}
    items={[
      { title: "Ann", value: 1 },
      { title: "Kate", value: 2 },
      { title: "Alice", value: 3 },
    ]}
    onClick={(id) => {
      alert(`user with id ${id} was clicked`);
    }}
  />
);

export const ModeChanging = () => {
  const [value, setValue] = useState<boolean>(true);
  return (
    <ControlledAccordion
      title={"Users"}
      collapsed={value}
      onChange={() => setValue(!value)}
      items={[
        { title: "Ann", value: 1 },
        { title: "Kate", value: 2 },
        { title: "Alice", value: 3 },
      ]}
      onClick={onClickCallback}
    />
  );
};

// export const CollapsedAccordion = () => (
//   <ControledAccordion title={"Menu"} collapsed={true} onChange={callback} />
// );

// export const UnCollapsedAccordion = () => (
//   <ControledAccordion title={"Menu"} collapsed={false} onChange={callback} />
// );
//
// export const UnControlledAccordion = () => {
//   const [collapse, setCollapse] = useState<boolean>(true);
//   return (
//     <ControledAccordion
//       title={"Menu"}
//       collapsed={collapse}
//       onChange={() => setCollapse(!collapse)}
//     />
//   );
// };
