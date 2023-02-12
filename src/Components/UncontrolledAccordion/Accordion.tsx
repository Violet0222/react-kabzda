import { AccordionTitle } from "./AccordionTitle";
import { AccordionBody } from "./AccordionBody";
import { useState } from "react";

type PropsAccordionType = {
  title: string;
};

export function UncontrolledAccordion(props: PropsAccordionType) {
  const [collapsed, setCollapsed] = useState(false);
  const onClickHandler = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div>
      <AccordionTitle title={props.title} onClick={onClickHandler} />
      {/*<button onClick={onClickHandler}>Toggle</button>*/}
      {collapsed && <AccordionBody />}
    </div>
  );
}
