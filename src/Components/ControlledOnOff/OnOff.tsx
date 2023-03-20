import { Light } from "./Light";
import s from "./OnOff.module.css";
import { Button } from "./Button";

export type OnOffType = boolean;
type OnPropsType = {
  value: boolean;
  onChange: (value: boolean) => void;
};
// export type ButtonChangeType = {
//   handleClick: () => void;
// };
export type ActiveType = boolean | undefined;

export function ControlledOnOff(props: OnPropsType) {
  const handleOnButtonClicked = () => {
    props.onChange(true);
  };
  const handleOffButtonClicked = () => {
    props.onChange(false);
  };

  return (
    <div className={s.container}>
      <Button onClick={handleOnButtonClicked}>On</Button>
      <Button onClick={handleOffButtonClicked}>Off</Button>
      <Light value={props.value} />
    </div>
  );
}
