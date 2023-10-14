import { useMemo, useState } from "react";

export default {
  title: "Use State demo",
};

const generatedData = () => {
  return 345787876;
};
export const Example1 = () => {
  // const initialValue = useMemo(generatedData,[]);
  const [counter, setCounter] = useState(generatedData);
  const changer = (state: number) => {
    return state + 1;
  };
  return (
    <>
      <button onClick={() => setCounter(changer)}>+</button>
      {counter}
    </>
  );
};
