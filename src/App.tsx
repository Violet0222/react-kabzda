import React, { useState } from "react";
import "./App.module.css";
import { OnOff } from "./Components/OnOff/OnOff";
import s from "./App.module.css";
import { UncontrolledAccordion } from "./Components/UncontrolledAccordion/Accordion";
import { UncontrolledRating } from "./Components/UncontrolledRating/Rating";
import { ControledAccordion } from "./Components/Accordion/Accordion";

function App() {
  let [accordionState, setAccordionStare] = useState(false);
  return (
    <div>
      {/*<AppTitle title={"This APP"} />*/}
      {/*<Rating value={1} />*/}
      <ControledAccordion
        title={"Menu"}
        collapsed={accordionState}
        onChange={() => {
          setAccordionStare(!accordionState);
        }}
      />
      {/*<Accordion title={"News"} collapsed={false} />*/}
      {/*<Rating value={3} />*/}
      <div className={s.style}>
        <OnOff />
      </div>
      <UncontrolledAccordion title={"Menu"} />
      <UncontrolledAccordion title={"News"} />
      <UncontrolledRating />
    </div>
  );
}

export default App;
