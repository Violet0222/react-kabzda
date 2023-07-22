import React, { useMemo, useState } from "react";

export default {
  title: "Use memo demo",
};

export const Example1 = () => {
  const [a, setA] = useState<number>(5);
  const [b, setB] = useState<number>(5);
  let resultA = 1;
  let resultB = 1;

  resultA = useMemo(() => {
    let temporalResultA = 1;
    for (let i = 1; i <= a; i++) {
      let fake = 0;
      while (fake < 100000000) {
        fake++;
        const fakeValue = Math.random();
      }
      temporalResultA = temporalResultA * i;
    }
    return temporalResultA;
  }, [a]);

  for (let i = 1; i <= b; i++) {
    resultB = resultB * i;
  }

  return (
    <>
      {/*Number and + are the convert value to number format*/}
      <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))} />
      <input value={b} onChange={(e) => setB(+e.currentTarget.value)} />
      <div>
        <div>Resul for a:{resultA}</div>
        <div>Resul for b:{resultB}</div>
      </div>
    </>
  );
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
export const ReactMemoHelper = () => {
  console.log("Helper");
  const [counterState, setCounterState] = useState<number>(0);
  const [users, setUsers] = useState(["kate", "ann", "Helen", "Artem"]);
  const onClickHandler = () => {
    setCounterState(counterState + 1);
  };

  const newArray = useMemo(() => {
    return users.filter((u) => u.toLowerCase().indexOf("a") > -1);
  }, [users]);

  const addUser = () => {
    const newUser = [...users, "Sveta" + new Date().getTime()];
    setUsers(newUser);
  };
  return (
    <>
      <div>
        <button onClick={onClickHandler}>+</button>
        <button onClick={() => addUser()}>add User</button>
        {counterState}
      </div>
      <div>
        <Users users={newArray} />
      </div>
    </>
  );
};
