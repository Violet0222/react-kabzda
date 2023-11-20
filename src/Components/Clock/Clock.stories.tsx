import { Clock } from "./Clock";

export default {
  title: "Clock",
};

export const BaseAnalogExample = () => {
  return <Clock mode={"ANALOG"} />;
};
export const BaseDigitalExample = () => {
  return <Clock mode={"DIGITAL"} />;
};
