export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const incrementAction = (params) => {
  return {
    type: INCREMENT,
    params,
  };
};
export const decrementAction = (params) => {
  return {
    type: DECREMENT,
    params,
  };
};
