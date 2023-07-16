import React, { ChangeEvent, useRef, useState } from "react";
import { action } from "@storybook/addon-actions";

export default {
  title: "input",
  // component:
};

export const UncontrolledInput = () => <input />;
export const InputWithTrackedValue = () => {
  const [value, setValue] = useState("");

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };
  return (
    <>
      <input value={value} onChange={onChangeHandler} />
    </>
  );
};

export const InputWithTrackedValueAndButton = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const addValue = () => {
    const el = inputRef.current as HTMLInputElement;
    setValue(el.value);
  };
  return (
    <>
      <input ref={inputRef} id={"78"} />
      <button onClick={addValue}>+</button> - actual value:{value}
    </>
  );
};
export const InputwithFixedValue = () => <input value={"ftyu"} />;

export const ControlledInput = () => {
  const [parentValue, setParentValue] = useState(" ");
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.value);
  };
  return (
    <>
      <input value={parentValue} onChange={onChangeHandler} />
    </>
  );
};

export const ControlledCheckbox = () => {
  const [parentValue, setParentValue] = useState(false);
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.checked);
  };
  return (
    <>
      <input
        type={"checkbox"}
        checked={parentValue}
        onChange={onChangeHandler}
      />
    </>
  );
};

export const ControlledSelect = () => {
  const [parentValue, setParentValue] = useState<string | undefined>("2");
  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setParentValue(e.currentTarget.value);
  };
  return (
    <>
      <select value={parentValue} onChange={onChangeHandler}>
        <option value={"1"}>none</option>
        <option value={"2"}>yes</option>
        <option value={"3"}>no</option>
      </select>
    </>
  );
};
