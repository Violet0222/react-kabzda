import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { UncontrolledAccordion } from "./Accordion";

export default {
  title: "UncontroledAccordion stories",
  component: UncontrolledAccordion,
};

export const MyAccordion = () => {
  return <UncontrolledAccordion title={"News"} />;
};
