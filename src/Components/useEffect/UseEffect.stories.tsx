import { useEffect, useMemo, useState } from "react";

export default {
  title: "UseEffect demo",
};

export const ExampleUseEffect = () => {
  const [counter, setCounter] = useState(0);
  const [fake, setFake] = useState(0);
  useEffect(() => {
    console.log("useEffect every time");
    document.title = counter.toString();
  });

  useEffect(() => {
    console.log("useEffect only 1st render (componentDidMount)");
    document.title = counter.toString();
  }, []);
  useEffect(() => {
    console.log("useEffect only 1st render and when counter was changed");
    document.title = counter.toString();
  }, [counter]);
  return (
    <>
      Hello {counter} {fake}
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setFake(fake + 1)}>+</button>
    </>
  );
};
