import { useDispatch, useSelector } from "react-redux";
import {
  DECREMENT,
  decrementAction,
  INCREMENT,
  incrementAction,
} from "./action";

const SecondComp = () => {
  const selector = useSelector((initialState) => {
    return initialState.CounterChanger;
  });

  const dispatch = useDispatch();
  const increment = (itemId) => {
    dispatch(incrementAction({ itemId }));
  };
  const decrement = (itemId) => {
    dispatch(decrementAction({ itemId }));
  };

  return (
    <>
      {selector.map((product) => {
        return (
          <div key={product.id}>
            <p>{product.item}</p>
            <p>{product.price}</p>
            <p>{product.quantity}</p>
            <button
              onClick={() => {
                increment(product.id);
              }}
            >
              +
            </button>
            <br />
            <button
              onClick={() => {
                decrement(product.id);
              }}
            >
              -
            </button>
          </div>
        );
      })}
    </>
  );
};
export default SecondComp;
