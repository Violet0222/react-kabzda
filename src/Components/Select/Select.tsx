import style from "./Select.module.css";
import { KeyboardEvent, useState } from "react";

export type ItemType = {
  title: string;
  value?: any;
};

type PropsSelectType = {
  value?: any;
  onChange: (value: any) => void;
  items: ItemType[];
};

export function Select(props: PropsSelectType) {
  const [active, setActive] = useState(false);
  const [hoveredElementValue, setHoveredElementValue] = useState(props.value);
  const selectedItem = props.items.find((i) => i.value === props.value);
  const hoveredItem = props.items.find((i) => i.value === hoveredElementValue);
  const toggleItem = () => setActive(!active);
  const onItemClick = (value: any) => {
    props.onChange(value);
    toggleItem();
  };

  const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
    for (let i = 0; i < props.items.length; i++) {
      if (props.items[i] === hoveredElementValue) {
        if (props.items[i + 1]) {
          props.onChange(props.items[i + 1].value);
        }
        break;
      }
    }
  };
  return (
    <>
      {/*<div style={{ border: "solid black 2px", width: "60px", height: "15px" }}>*/}
      {/*<select>*/}
      {/*  <option value="">Ann</option>*/}
      {/*  <option value="">Nick</option>*/}
      {/*  <option value="">Kate</option>*/}
      {/*</select>*/}
      <div className={style.select} onKeyUp={onKeyUp} tabIndex={0}>
        <span className={style.main} onClick={toggleItem}>
          {selectedItem && selectedItem.title}
        </span>
        {active && (
          <div className={style.items}>
            {props.items.map((i) => (
              <div
                onMouseEnter={() => {
                  setHoveredElementValue(i.value);
                }}
                className={
                  style.item + " " + (hoveredItem === i ? style.selected : "")
                }
                key={i.value}
                onClick={() => {
                  onItemClick(i.value);
                }}
              >
                {i.title}
              </div>
            ))}
          </div>
        )}
      </div>

      {/*</div>*/}
    </>
  );
}
