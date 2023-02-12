import React from "react";
import "./App.module.css";
import { OnOff } from "./Components/OnOff/OnOff";
import s from "./App.module.css";
import { UncontrolledAccordion } from "./Components/UncontrolledAccordion/Accordion";
import { UncontrolledRating } from "./Components/UncontrolledRating/Rating";

function App() {
  return (
    <div>
      {/*<AppTitle title={"This APP"} />*/}
      {/*<Rating value={1} />*/}
      {/*<Accordion title={"Menu"} collapsed={true} />*/}
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
