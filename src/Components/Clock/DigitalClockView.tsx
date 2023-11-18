import React from "react";
import { ClockViewPropsType } from "./Clock";

export const DigitalClockView: React.FC<ClockViewPropsType> = (props) => {
  return (
    <div>
      <span>{props.numberTostring(props.date.getHours())}</span>:
      <span>{props.numberTostring(props.date.getMinutes())}</span>:
      <span>{props.numberTostring(props.date.getSeconds())}</span>
    </div>
  );
};
