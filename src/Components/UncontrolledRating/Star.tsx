import { MouseEventHandler } from "react";
import s from "./styles.module.css";
import { RatingStarFilled } from "./icons/rating-star-filled";
import { RatingStarOutlined } from "./icons/rating-star-outlined";

export type PropsStarType = {
  selected: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
  value: number;
};

export function Star(props: PropsStarType) {
  const { onClick, value, selected } = props;
  return (
    <button onClick={onClick} value={value} className={s.ratingButton}>
      {selected ? <RatingStarFilled /> : <RatingStarOutlined />}
    </button>
  );
}
