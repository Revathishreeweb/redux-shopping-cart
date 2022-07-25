import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import CartDetails from './CartDetails'
import Gallery from './Gallery'
import Checkout from './Checkout'
import Login from './common/Login'

const RoutesWrapper = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Gallery/>}/>
        <Route path='/cartDetails' element={<CartDetails/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default RoutesWrapper