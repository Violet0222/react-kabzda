import { AccordionTitle } from "./AccordionTitle";
import { AccordionBody } from "./AccordionBody";
import { useReducer } from "react";
import { reducer, TOGGLE_CONSTANT } from "./reducer";

type PropsAccordionType = {
  title: string;
};

export function UncontrolledAccordion(props: PropsAccordionType) {
  // const [collapsed, setCollapsed] = useState(false);
  const [state, dispatch] = useReducer(reducer, { collapsed: false });
  const onClickHandler = () => {
    console.log("here");
    // setCollapsed(!collapsed);
    dispatch({ type: TOGGLE_CONSTANT });
  };
  return (
    <div>
      <AccordionTitle title={props.title} onClick={onClickHandler} />
      {/*<button onClick={onClickHandler}>Toggle</button>*/}
      {state.collapsed && <AccordionBody />}
    </div>
  );
}
