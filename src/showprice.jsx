import { useSelector } from "react-redux";

const FirstComp = () => {
  const selector = useSelector((state) => state.CounterChanger);

  return (
    <>
      <p>
        cart items:{selector[0].item} :quantity {selector[0].quantity} =
        {selector[0].price * selector[0].quantity}
      </p>
      <p>
        cart items:{selector[1].item}:quantity {selector[1].quantity} =
        {selector[1].price * selector[1].quantity}
      </p>
      <p>
        cart items:{selector[2].item}:quantity {selector[2].quantity} =
        {selector[2].price * selector[2].quantity}
      </p>
      <p>
        final price :{" "}
        {selector[0].price * selector[0].quantity +
          selector[1].price * selector[1].quantity +
          selector[2].price * selector[2].quantity}
      </p>
    </>
  );
};
export default FirstComp;
