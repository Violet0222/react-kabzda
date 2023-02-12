import s from "./OnOff.module.css";
import { ActiveType } from "./OnOff";

type LightProps = {
  value: boolean;
};
export function Light(props: LightProps) {
  const classes = getActiveClasses(props.value);

  return <div className={`${s.lightstyle} ${classes}`}></div>;
}

const getActiveClasses = (value: boolean) => {
  if (value === undefined) {
    return "";
  }
  if (value) {
    return s.active;
  }
  return s.notActive;
};
