import React from 'react'
import Footer from './Footer'
import Header from './Header'
import '../pages.css'


const Layout = (props) => {
  return (
    <>
    <Header/>
    <div className='main-page'>
        {props.children}
    </div>
    <Footer/>
    </>
  )
}

export default Layout