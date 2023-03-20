import { Light } from "./Light";
import s from "./OnOff.module.css";
import { useState } from "react";
import { Button } from "./Button";

// export type ButtonChangeType = {
//   handleClick: () => void;
// };
export type ActiveType = boolean | undefined;

export function OnOffUncontroled() {
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
