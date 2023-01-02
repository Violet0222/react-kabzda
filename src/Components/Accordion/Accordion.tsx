import { AccordionTitle } from "./AccordionTitle";
import { AccordionBody } from "./AccordionBody";

type PropsAccordionType = {
  title: string;
  collapsed: boolean;
};

export function Accordion(props: PropsAccordionType) {
  return (
    <div>
      <AccordionTitle title={props.title} />
      {props.collapsed === false && <AccordionBody />}
    </div>
  );
}
