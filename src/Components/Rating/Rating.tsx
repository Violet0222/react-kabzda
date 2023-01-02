import { Star } from "./Star";

type PropsRatingType = {
  value: number;
};

export function Rating(props: PropsRatingType) {
  return (
    <div>
      <Star selected={props.value > 0} />
      <Star selected={props.value > 1} />
      <Star selected={props.value > 2} />
    </div>
  );
}
