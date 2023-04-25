import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer'
import Modal from './components/Modal'
import { useDispatch, useSelector } from 'react-redux'
import { getCartItems } from './feature/cart/cartSlice'
export default function App() {
  const dispatch = useDispatch()
  const { isLoading ,isError,error} = useSelector(store => store.cart)

  useEffect(() => {
    dispatch(getCartItems())
  }, [])
  if (isLoading) {
    return <p className='text-center pt-32 capitalize font-bold text-xl'>Loading...</p>
  }
  if (isError) { 
    return <p className='text-center pt-32 capitalize font-bold text-xl'>{error }</p>
  }
  return (
    <div className="relative  tracking-wider">
      <Navbar />
      <CartContainer />
      <Modal/>
    </div>
  )
}
