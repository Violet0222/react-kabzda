type PropsTitleType = {
  title: string;
  onClick: () => void;
};

export function AccordionTitle(props: PropsTitleType) {
  console.log("star rendering");
  return <h3 onClick={props.onClick}>{props.title}</h3>;
}
