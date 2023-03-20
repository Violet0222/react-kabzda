import React, { useState } from "react";
import { Rating, RatingValueType } from "./Rating";

export default {
  title: "Rating stories",
  component: Rating,
};

export const EmptyStars = () => <Rating value={0} onClick={(x) => x}></Rating>;
export const Star1 = () => <Rating value={1} onClick={(x) => x}></Rating>;
export const Star2 = () => <Rating value={2} onClick={(x) => x}></Rating>;
export const Star3 = () => <Rating value={3} onClick={(x) => x}></Rating>;

export const RatingChanging = () => {
  const [rating, setRating] = useState<RatingValueType>(3);
  return <Rating value={rating} onClick={setRating} />;
};
