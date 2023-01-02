export type PropsStarType = {
  selected: boolean;
};

export function Star(props: PropsStarType) {
  if (props.selected) {
    return (
      <div>
        <b>star</b>
      </div>
    );
  } else {
    return <div>star</div>;
  }
}
