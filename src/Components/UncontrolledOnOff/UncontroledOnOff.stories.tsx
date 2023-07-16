import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { OnOffUncontroled } from "./OnOff";

export default {
  title: "UncontroledOnOff stories",
  component: OnOffUncontroled,
};

const callback = () => action("on or off were clicked");

export const UncontroledOnOff = () => {
  return <OnOffUncontroled onChange={callback} />;
};
