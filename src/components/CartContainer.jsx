import React, { useEffect } from "react";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../feature/modal/modalSlice";
import { calculateTotal, clearCart } from "../feature/cart/cartSlice";
export default function CartContainer() {
  const { cartItems, total } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);
  return (
    <div className="container mx-auto p-10 ">
      <h1 className="text-4xl font-bold text-center pb-5">YOUR BAG</h1>
      {!cartItems.length <= 0 ? (
        <div className="cart flex flex-col ">
          {cartItems.map((item) => {
            return <CartItem key={item.id} {...item} />;
          })}
          <hr className=" border-b-2  border-current my-5 " />
          <div className="flex justify-between items-center font-bold">
            <p>Total</p>
            <p>${total}</p>
          </div>
          <button
            className="border-2 border-red-500 text-red-500 text-lg font-bold  rounded px-4 mx-auto hover:bg-red-500 hover:text-white active:bg-red-700 "
            onClick={() => dispatch(openModal())}
          >
            Clear All
          </button>
        </div>
      ) : (
        <p className="text-center font-bold tracking-widest text-gray-400">
          is currently empty
        </p>
      )}
    </div>
  );
}
