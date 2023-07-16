type AccordionType = {
  titleValue: string;
  collapsed: boolean;
  onChange: () => void;
  items: Array<string>;
};
export function NewAccordion(props: AccordionType) {
  return (
    <div>
      <AcordionTitle title={props.titleValue} onChange={props.onChange} />
      {!props.collapsed && <AccordionBody items={props.items} />}
    </div>
  );
}

type AccordionTitlePropsType = {
  title: string;
  onChange: () => void;
};

function AcordionTitle(props: AccordionTitlePropsType) {
  return <h3 onClick={(e) => props.onChange()}>--{props.title}--</h3>;
}

type AccordionBodyPropsType = {
  items: Array<string>;
};
function AccordionBody(props: AccordionBodyPropsType) {
  return (
    <ul>
      {props.items.map((el) => (
        <li>{el}</li>
      ))}
    </ul>
  );
}
