import React from 'react'
import {useSelector} from 'react-redux'
import {Navigate} from 'react-router-dom'

const ProtectedRoute = ({children}) => {
    const {cartItems} = useSelector(state => state.cart)
  return (
    cartItems.length >= 1 ? children : <Navigate to='/'/>
  )
}

export default ProtectedRoute