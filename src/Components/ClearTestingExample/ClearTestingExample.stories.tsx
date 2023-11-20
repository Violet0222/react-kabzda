import { useEffect, useState } from "react";

export default {
  title: "ClearTesting",
};

export const ClearTestingExample = () => {
  const [text, setText] = useState("");
  console.log("Component rendered with" + text);
  useEffect(() => {
    const keyPressHandler = (e: KeyboardEvent) => {
      console.log(e.key);
      setText((state) => state + e.key);
    };
    window.addEventListener("keypress", keyPressHandler);
    return () => {
      window.removeEventListener("keypress", keyPressHandler);
    };
  }, []);
  return <div>Typed text: {text}</div>;
};
