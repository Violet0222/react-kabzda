import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { ControlledOnOff } from "./OnOff";

export default {
  title: "OnOff stories",
  component: ControlledOnOff,
};

const callback = action("on or off cliked");
export const ControlledOn = () => (
  <ControlledOnOff value={true} onChange={callback} />
);

export const ControlledOff = () => (
  <ControlledOnOff value={false} onChange={callback} />
);

export const UnControlled = () => {
  const [on, setOn] = useState<boolean>(true);
  return <ControlledOnOff value={on} onChange={setOn} />;
};
