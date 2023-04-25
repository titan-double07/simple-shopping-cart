import React from 'react'
import { FaShoppingBag } from "react-icons/fa";
import { useSelector } from 'react-redux';

export default function Navbar() {
    const { amount } = useSelector((store) => store.cart)
    return (
        <div className='flex justify-between items-center py-4 px-10 bg-blue-700 text-white relative'>
            <p className='text-3xl underline'>Shopping Cart</p>
            <FaShoppingBag className='text-2xl'/>
            <div className="absolute top-2 right-8 px-1.5 font-bold rounded-full bg-indigo-500 ">{ amount}</div>
        </div>
    )
}
