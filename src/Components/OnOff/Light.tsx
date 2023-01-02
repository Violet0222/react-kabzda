import s from "./OnOff.module.css";
import { ActiveType } from "./OnOff";

type LightProps = {
  isActive: ActiveType;
};
export function Light(props: LightProps) {
  const classes = getActiveClasses(props.isActive);

  return <div className={`${s.lightstyle} ${classes}`}></div>;
}

const getActiveClasses = (isActive: ActiveType) => {
  if (isActive === undefined) {
    return "";
  }
  if (isActive) {
    return s.active;
  }
  return s.notActive;
};
