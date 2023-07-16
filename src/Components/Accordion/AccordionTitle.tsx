type AccordionTitlePropsType = {
  title: string;
  onChange: () => void;
};

export function AccordionTitle(props: AccordionTitlePropsType) {
  return <h3 onClick={(e) => props.onChange()}>--{props.title}--</h3>;
}
// type PropsTitleType = {
//   title: string;
//   onClick: () => void;
// };
//
// export function AccordionTitle(props: PropsTitleType) {
//   console.log("star rendering");
//   return <h3 onClick={() => props.onClick()}>{props.title}</h3>;
