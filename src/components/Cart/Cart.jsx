import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { clearCart } from "../../store/cartSlice";

export default function Cart() {
  let total = 0;
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const loadCartItems = cartItems.map((item) => {
    total += item.quantity * Number(item.price.replace(".", ""));
    return (
      <CartItem
        key={item.id}
        productId={item.id}
        product={item.product}
        quantity={item.quantity}
        price={item.price}
        img={item.img}
      />
    );
  });

  return (
    <div className="w-full h-screen bg-slate-300">
      <div className="absolute top-[10%] left-[50%] translate-x-[-50%] w-[95%] xl:w-[70%] ">
        <h1 className="lg:text-left text-3xl mb-[1rem]">My Cart</h1>
        {/* CART */}
        <div className="relative bg-red-400 rounded min-h-[15rem] p-[0.5rem] xl:p-[1rem]">
          <div className="flex flex-col items-center mb-[5rem] justify-center">
            {loadCartItems}
            {loadCartItems.length === 0 && (
              <h1 className=" text-sm xl:text-2xl italic font-bold absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                No items found for this cart.
              </h1>
            )}
          </div>
          <div className="absolute bottom-[5%] right-[6%] flex items-center">
            <h1 className="xl:text-2xl font-bold mr-[2rem]">Total: {total}$</h1>
            <button
              className="w-[7rem] h-[3rem] bg-green-400 rounded text-xl hover:bg-green-500 cursor-pointer"
              onClick={() => dispatch(clearCart())}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
