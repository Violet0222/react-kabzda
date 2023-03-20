import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { ControledAccordion } from "./Accordion";

export default {
  title: "Accordion stories",
  component: ControledAccordion,
};

const callback = action("collapse or uncollapse was clicked");
export const CollapsedAccordion = () => (
  <ControledAccordion title={"Menu"} collapsed={true} onChange={callback} />
);

export const UnCollapsedAccordion = () => (
  <ControledAccordion title={"Menu"} collapsed={false} onChange={callback} />
);

export const UnControlledAccordion = () => {
  const [collapse, setCollapse] = useState<boolean>(true);
  return (
    <ControledAccordion
      title={"Menu"}
      collapsed={collapse}
      onChange={() => setCollapse(!collapse)}
    />
  );
};
