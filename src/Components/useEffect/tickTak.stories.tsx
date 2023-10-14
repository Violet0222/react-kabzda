import { useEffect, useState } from "react";

export default {
  title: "UseEffect tickTack demo",
};

export const TickTack = () => {
  const date = new Date();
  const hours = date.getHours();
  console.log(hours);
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  console.log(seconds);
  const [counter, setCounter] = useState(seconds);

  useEffect(() => {
    setInterval(() => {
      setCounter((state) => (state < 59 ? state + 1 : 0));
    }, 1000);
  }, []);

  return (
    <>
      {hours}:{minutes} counter: {counter}
    </>
  );
};
