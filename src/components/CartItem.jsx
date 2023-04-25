import React from "react";
import { FaChevronDown, FaChevronUp, FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { decrease, increase, removeItem } from "../feature/cart/cartSlice";

export default function CartItem(props) {
  const dispatch = useDispatch();
  const { id, title, price, img, amount } = props;
  return (
    <div className="flex items-center justify-between gap-10 pb-7">
      <img src={img} alt="" className="w-24" />
      <div className="flex flex-col items-start gap-1 w-full">
        <p className=" font-semibold text-sm ">{title}</p>
        <p className=" font-semibold text-sm text-gray-400 ">{price}</p>
        <button
          className=" text-red-600 hover:scale-125 scale"
          onClick={() => dispatch(removeItem({ id }))}
        >
          <FaTrash />
        </button>
      </div>
      <div className="no-of-items flex flex-col items-center pl-[200px] w-1/2">
        <FaChevronUp
          className=" cursor-pointer hover:-translate-y-1"
          onClick={() => dispatch(increase({ id }))}
        />
        <p>{amount}</p>
        <FaChevronDown
          className=" cursor-pointer hover:translate-y-1"
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem({ id }));
            } else {
              dispatch(decrease({ id }));
            }
          }}
        />
      </div>
    </div>
  );
}
