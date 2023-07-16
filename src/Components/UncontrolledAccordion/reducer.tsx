type ActionType = {
  type: string;
};
export type StateType = {
  collapsed: boolean;
};
export const TOGGLE_CONSTANT = "TOGGLE-COLLAPSED";
export const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case TOGGLE_CONSTANT:
      const stateCopy = { ...state };
      stateCopy.collapsed = !state.collapsed;
      console.log(stateCopy);
      return stateCopy;

    default:
      throw new Error("Bad action type");
  }
  return state;
};
