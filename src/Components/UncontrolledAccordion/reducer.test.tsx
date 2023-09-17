import { reducer, StateType, TOGGLE_CONSTANT } from "./reducer";

test("reducer should return value: true", () => {
  //data
  const state: StateType = {
    collapsed: false,
  };
  //action
  const newState = reducer(state, { type: TOGGLE_CONSTANT });
  //expected
  expect(newState.collapsed).toBe(true);
});

test("reducer should return value: false", () => {
  //data
  const state: StateType = {
    collapsed: true,
  };
  //action
  const newState = reducer(state, { type: TOGGLE_CONSTANT });
  //expected
  expect(newState.collapsed).toBe(false);
});

// test("reducer should return value: error", () => {
//   //data
//   const state: StateType = {
//     collapsed: true,
//   };
//   //action
//
//   //expected
//   expect(() => {
//     reducer(state, { type: FAKETYPE });
//   }).toThrowError();
// });
