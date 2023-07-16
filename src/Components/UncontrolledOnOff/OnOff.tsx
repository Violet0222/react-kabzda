import { Light } from "./Light";
import s from "./OnOff.module.css";
import { useState } from "react";
import { Button } from "./Button";
import { ItemType } from "../Accordion/Accordion";

// export type ButtonChangeType = {
//   handleClick: () => void;
// };
export type ActiveType = boolean | undefined;

type PropsType = {
  onChange: () => void;
};
export function OnOffUncontroled(props: PropsType) {
  const [isActive, setIsActive] = useState<ActiveType>(undefined);

  const handleOnButtonClicked = () => {
    setIsActive(true);
  };
  const handleOffButtonClicked = () => {
    setIsActive(false);
  };

  return (
    <div className={s.container}>
      <Button onClick={handleOnButtonClicked}>On</Button>
      <Button onClick={handleOffButtonClicked}>Off</Button>
      <Light isActive={isActive} />
    </div>
  );
}
