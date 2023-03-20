import { RatingValueType } from "./Rating";

export type PropsStarType = {
  selected: boolean;
  value: RatingValueType;
  onClick: (value: RatingValueType) => void;
};

export function Star(props: PropsStarType) {
  if (props.selected) {
    return (
      <div
        onClick={() => {
          props.onClick(props.value);
        }}
      >
        <b>star</b>
      </div>
    );
  } else {
    return <div>star</div>;
  }
}
