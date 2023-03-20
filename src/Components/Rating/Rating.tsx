import { Star } from "./Star";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;
export type PropsRatingType = {
  value: number;
  onClick: (value: RatingValueType) => void;
};

export function Rating(props: PropsRatingType) {
  return (
    <div>
      <Star selected={props.value > 0} onClick={props.onClick} value={1} />
      <Star selected={props.value > 1} onClick={props.onClick} value={2} />
      <Star selected={props.value > 2} onClick={props.onClick} value={3} />
    </div>
  );
}
