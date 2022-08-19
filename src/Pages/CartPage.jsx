import React from 'react'
import Carts from '../components/Carts'
import FreeCart from '../components/FreeCart'
import { useSelector } from 'react-redux/es/exports'

const CartPage = () => {
  const carts = useSelector(state => state.carts.items)
  return (
    <>
    {carts.length > 0 ? <Carts></Carts> : <FreeCart></FreeCart>}

    </>
  )
}

export default CartPage