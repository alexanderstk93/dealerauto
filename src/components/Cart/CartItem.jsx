import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { updateCartItem } from "../../store/cartSlice";

export default function CartItem({ product, quantity, price, img, productId }) {
  const [localQuantity, setLocalQuantity] = useState(quantity);
  const quantityRef = useRef("");
  const dispatch = useDispatch();

  const quantityHandler = () => {
    if (+quantityRef.current.value > 0 && +quantityRef.current.value <= 10) {
      setLocalQuantity(+quantityRef.current.value);
      dispatch(
        updateCartItem({ id: productId, quantity: +quantityRef.current.value })
      );
    } else if (+quantityRef.current.value > 10) {
      setLocalQuantity(10);
      dispatch(updateCartItem({ id: productId, quantity: 10 }));
    } else if (quantityRef.current.value === "") return;
    else if (
      +quantityRef.current.value === 0 &&
      window.confirm("Delete item from cart?")
    ) {
      dispatch(updateCartItem({ id: productId, quantity: 0 }));
    } else {
      setLocalQuantity(1);
    }
  };

  return (
    <div
      className={`w-full xl:w-[90%] bg-white rounded p-[1rem] flex items-center shadow-xl border-[1px] border-gray-300 xl:text-xl mb-[1rem]`}
    >
      <div className="basis-1/5  xl:basis-2/6 flex flex-col xl:flex-row items-center">
        <img className="w-[50px] xl:mr-[1rem]" src={img} alt="" /> {product}{" "}
        (id:
        {productId})
      </div>
      <div className="basis-3/5 xl:basis-2/6 flex items-center justify-center">
        <p className="mr-[0.5rem]">Quantity: </p>
        <input
          onChange={quantityHandler}
          className="w-[3rem] text-center border-[1px] border-red-400 shadow-xl"
          type="number"
          ref={quantityRef}
          value={localQuantity}
          min={0}
          max={10}
        />
      </div>
      <div className="basis-1/5 xl:basis-2/6">
        {quantity * Number(price.replace(".", ""))}$
      </div>
    </div>
  );
}
