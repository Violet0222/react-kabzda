type PropsTitleType = {
  title: string;
};

export function AccordionTitle(props: PropsTitleType) {
  console.log("star rendering");
  return <>{props.title}</>;
}
