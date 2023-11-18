import React from "react";
import s from "./Clock.module.css";

type Props = {
  hours: number;
  minutes: number;
  seconds: number;
};
export const AnalogClockView: React.FC<Props> = ({
  minutes,
  seconds,
  hours,
}) => {
  const hourHandRotation = hours * 30 + minutes * 0.5;
  const minuteHandRotation = minutes * 6 + seconds * 0.1;
  const secondHandRotation = seconds * 6;

  const hourHandStyle = {
    transform: `rotate(${hourHandRotation}deg) translateX(-50%)`,
  };

  const minuteHandStyle = {
    transform: `rotate(${minuteHandRotation}deg) translateX(-50%)`,
  };

  const secondHandStyle = {
    transform: `rotate(${secondHandRotation}deg) translateX(-50%)`,
  };
  return (
    <div className={s.clockWithHands}>
      <div className={`${s.hand} ${s.hourHand}`} style={hourHandStyle}></div>
      <div
        className={`${s.hand} ${s.minuteHand}`}
        style={minuteHandStyle}
      ></div>
      <div
        className={`${s.hand} ${s.secondHand}`}
        style={secondHandStyle}
      ></div>
      <div className={`${s.number} ${s.number1}`}>1</div>
      <div className={`${s.number} ${s.number2}`}>2</div>
      <div className={`${s.number} ${s.number3}`}>3</div>
      <div className={`${s.number} ${s.number4}`}>4</div>
      <div className={`${s.number} ${s.number5}`}>5</div>
      <div className={`${s.number} ${s.number6}`}>6</div>
      <div className={`${s.number} ${s.number7}`}>7</div>
      <div className={`${s.number} ${s.number8}`}>8</div>
      <div className={`${s.number} ${s.number9}`}>9</div>
      <div className={`${s.number} ${s.number10}`}>10</div>
      <div className={`${s.number} ${s.number11}`}>11</div>
      <div className={`${s.number} ${s.number12}`}>12</div>
    </div>
  );
};
