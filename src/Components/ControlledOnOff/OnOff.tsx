import { Light } from "./Light";
import s from "./OnOff.module.css";
import { useState } from "react";
import { Button } from "./Button";

type OnPropsType = {
  value: boolean;
  onChange: () => void;
};
// export type ButtonChangeType = {
//   handleClick: () => void;
// };
export type ActiveType = boolean | undefined;

export function ControlledOnOff(props: OnPropsType) {
  const handleOnButtonClicked = () => {
    props.onChange();
  };
  const handleOffButtonClicked = () => {
    props.onChange();
  };

  return (
    <div className={s.container}>
      <Button onClick={handleOnButtonClicked}>On</Button>
      <Button onClick={handleOffButtonClicked}>Off</Button>
      <Light value={props.value} />
    </div>
  );
}
