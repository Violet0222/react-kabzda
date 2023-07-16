import { useState } from "react";

type ItemType = { title: string; value: number };
type MySelectPropsType = {
  value: number;
  onChange: (value: number) => void;
  items: Array<ItemType>;
};

export function MySelect(props: MySelectPropsType) {
  const [active, setActive] = useState(false);
  const selectedItem = props.items.find((el) => el.value === props.value);

  const toggleItem = () => {
    setActive(!active);
  };

  const onItemClicked = (value: number) => {
    props.onChange(value);
    toggleItem();
  };
  return (
    <div>
      <div onClick={toggleItem}>{selectedItem && selectedItem.title}</div>
      {active && (
        <div>
          {props.items.map((el) => (
            <div
              key={el.value}
              onClick={() => {
                onItemClicked(el.value);
              }}
            >
              {el.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
