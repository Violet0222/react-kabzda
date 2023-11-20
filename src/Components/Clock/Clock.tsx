import React, { useEffect, useState } from "react";
import { DigitalClockView } from "./DigitalClockView";
import { AnalogClockView } from "./AnalogClockView";
type PropsType = {
  mode?: "ANALOG" | "DIGITAL";
};
export const Clock: React.FC<PropsType> = (props) => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const setIntervalId = setInterval(() => {
      console.log("TICK");
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(setIntervalId);
    };
  }, []);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const numberTostring = (num: number): string =>
    num < 10 ? "0" + num : num.toString();
  let view;
  switch (props.mode) {
    case "ANALOG":
      view = <AnalogClockView {...{ minutes, seconds, hours }} />;
      break;
    case "DIGITAL":
    default:
      view = <DigitalClockView date={date} numberTostring={numberTostring} />;
  }
  return <>{view}</>;
};

export type ClockViewPropsType = {
  date: Date;
  numberTostring: (num: number) => string;
};
