import { AccordionTitle } from "./AccordionTitle";
import { AccordionBody } from "./AccordionBody";

type PropsAccordionType = {
  title: string;
  collapsed: boolean;
  onChange: () => void;
};

export function ControledAccordion(props: PropsAccordionType) {
  return (
    <div>
      <AccordionTitle title={props.title} onClick={props.onChange} />
      {props.collapsed === false && <AccordionBody />}
    </div>
  );
}
