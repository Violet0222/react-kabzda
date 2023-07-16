import { ItemType } from "./Accordion";

type AccordionBodyPropsType = {
  items: ItemType[];
  onClick: (value: any) => void;
};
export function AccordionBody(props: AccordionBodyPropsType) {
  return (
    <ul>
      {props.items.map((el, index) => (
        <li
          onClick={() => {
            props.onClick(el.value);
          }}
          key={index}
        >
          {el.title}
        </li>
      ))}
    </ul>
  );
}

// export function AccordionBody() {
//   return (
//     <div>
//       <ul>
//         <li>1</li>
//         <li>2</li>
//       </ul>
//     </div>
//   );
// }
