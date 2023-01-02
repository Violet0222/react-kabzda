import React from "react";
import "./App.module.css";
import { Accordion } from "./Components/Accordion/Accordion";
import { Rating } from "./Components/Rating/Rating";
import { AppTitle } from "./Components/AppTitle";
import { OnOff } from "./Components/OnOff/OnOff";
import s from "./App.module.css";

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
    </div>
  );
}

export default App;
