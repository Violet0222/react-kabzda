import { ControlledOnOff } from "../ControlledOnOff/OnOff";
import { action } from "@storybook/addon-actions";
import React, { useState } from "react";

export default {
  title: "React memo demo",
};

const Newcounter = (props: { count: number }) => {
  return <div>{props.count}</div>;
};

const newUsers = (props: { users: Array<string> }) => {
  console.log("Users");
  return (
    <div>
      {props.users.map((u, i) => (
        <div key={i}>{u}</div>
      ))}
    </div>
  );
};

const Users = React.memo(newUsers);
export const Example = () => {
  const [counterState, setCounterState] = useState<number>(0);
  const [users, setUsers] = useState(["kate", "ann"]);
  const onClickHandler = () => {
    setCounterState(counterState + 1);
  };
  return (
    <>
      <div>
        <Newcounter count={counterState} />
        <button onClick={onClickHandler}>+</button>
      </div>
      <div>
        <Users users={users} />
      </div>
    </>
  );
};
