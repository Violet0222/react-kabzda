import { AccordionTitle } from "./AccordionTitle";
import { AccordionBody } from "./AccordionBody";

export type ItemType = {
  title: string;
  value: any;
};

type PropsAccordionType = {
  title: string;
  collapsed: boolean;
  onChange: () => void;
  items: ItemType[];
  onClick: (value: any) => void;
};

export function ControlledAccordion(props: PropsAccordionType) {
  return (
    <div>
      <AccordionTitle title={props.title} onChange={props.onChange} />
      {!props.collapsed && (
        <AccordionBody items={props.items} onClick={props.onClick} />
      )}
    </div>
  );
}
