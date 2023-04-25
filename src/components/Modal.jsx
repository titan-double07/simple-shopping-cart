import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../feature/modal/modalSlice';
import { clearCart } from '../feature/cart/cartSlice';

export default function Modal() {
    const dispatch = useDispatch()
    const {isOpen } = useSelector((store) => store.modal
)

{  return isOpen&& (
    <div className="bg-[#102a42]  z-10 absolute bottom-0 mx-auto w-full h-screen overflow-auto  flex justify-center items-center  font-bold tracking-[.2em]">
      <div className="bg-white rounded w-3/4 h-2/4 flex flex-col justify-center items-center gap-5  p-20 text-center">
        <p>Remove All Items from shopping cart?</p>
        <div className="flex gap-5 text-lg  ">
          <button onClick={()=>{dispatch(closeModal()),dispatch(clearCart())}} className="border-2 border-blue-500 px-5 rounded tracking-[.2em] uppercase text-blue-500">
            Confirm
          </button>
          <button onClick={()=>dispatch(closeModal())} className="border-2 border-red-500 px-5 rounded tracking-[.2em] uppercase text-red-500 ">
            Cancel
          </button>
        </div>
      </div>
    </div>
  )};
}
