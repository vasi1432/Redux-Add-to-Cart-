import { INCREMENT, DECREMENT } from "./action";

const initialState = [
  { id: 0, item: "IPHONE", price: 50000, quantity: 2 },
  { id: 1, item: "SAMSUNG", price: 30000, quantity: 3 },
  { id: 2, item: "MI", price: 10000, quantity: 4 },
];

const CounterChanger = (state = initialState, action) => {
  console.log("@VA LN:10", action);
  switch (action.type) {
    case INCREMENT:
      // const newList = [];
      // for (let i = 0; i < state.length; i++) {
      //   const currentItem = state[i];
      //   if (action.params.itemId === currentItem.id) {
      //     currentItem.quantity += 1;
      //   }
      //   newList.push(currentItem);
      // }
      // return newList;

      //   const copyState = [...state];
      //   const increaseList = copyState.map((product) => {
      //     if (action.params.itemId === product.id) {
      //       product.quantity += 1;
      //     }
      //     return product;
      //   });
      //   console.log("increaseList", increaseList);

      return state.map((product) => {
        const productCopy = { ...product };
        if (action.params.itemId === productCopy.id) {
          productCopy.quantity = productCopy.quantity + 1;
        }
        return productCopy;
      });

    case DECREMENT:
      return state.map((product) => {
        const productCopy = { ...product };
        if (action.params.itemId === productCopy.id) {
          productCopy.quantity = productCopy.quantity - 1;
        }
        return productCopy;
      });
    //  const decreaseList = state.map((product) => {
    //     if (action.params.itemId === product.id) {
    //       product.quantity -= 1;
    //     }
    //     return product;
    //   });
    //   console.log("@VA LN:28", decreaseList);
    //   return [...state];
    default:
      return state;
  }
};
export default CounterChanger;
