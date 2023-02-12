import { Star } from "./Star";
import { MouseEventHandler, useState } from "react";
import s from "./styles.module.css";
const MAX_STARS = 5;
const INITIAL_STARS = 0;

export function UncontrolledRating() {
  const [rating, setRating] = useState(INITIAL_STARS);

  const handleStarClicked: MouseEventHandler<HTMLButtonElement> = (e) => {
    // setRating(Number(e.currentTarget.value));
    setRating(+e.currentTarget.value);
  };

  const starsArr = Array(MAX_STARS)
    .fill(null)
    .map((_, i) => i + 1);

  // const _starsArr = [1, 2, 3, 4, 5];

  return (
    <div className={s.ratingContainer}>
      {starsArr.map((currentStarValue) => {
        const selected = currentStarValue <= rating;
        return (
          <div key={currentStarValue}>
            <Star
              selected={selected}
              onClick={handleStarClicked}
              value={currentStarValue}
            />
          </div>
        );
      })}
    </div>
  );
}
