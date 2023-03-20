import React, { useState } from "react";
import "./App.module.css";
import { OnOffUncontroled } from "./Components/UncontrolledOnOff/OnOff";
import s from "./App.module.css";
import { UncontrolledAccordion } from "./Components/UncontrolledAccordion/Accordion";
import { UncontrolledRating } from "./Components/UncontrolledRating/Rating";
import { ControledAccordion } from "./Components/Accordion/Accordion";
import { ControlledOnOff, OnOffType } from "./Components/ControlledOnOff/OnOff";
import { Rating, RatingValueType } from "./Components/Rating/Rating";

function App() {
  let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
  let [accordionState, setAccordionStare] = useState(false);
  let [switchOn, setSwitchOn] = useState<OnOffType>(false);
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
      <ControlledOnOff value={switchOn} onChange={(On) => setSwitchOn(On)} />
      {/*<Accordion title={"News"} collapsed={false} />*/}
      <Rating value={ratingValue} onClick={setRatingValue} />
      <div className={s.style}>
        <OnOffUncontroled />
      </div>
      <UncontrolledAccordion title={"Menu"} />
      <UncontrolledAccordion title={"News"} />
      <UncontrolledRating />
    </div>
  );
}

export default App;
