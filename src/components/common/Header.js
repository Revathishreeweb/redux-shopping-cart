import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'

const Header = () => {
  return (
    <>
    <nav className='header d-flex justify-content-between p-2'>
       
<div className='logo-wrapper' >
  <Link to='/'> 
   <img src={logo} alt="logo" ></img>
   </Link>

</div>
<div className='profile-section d-flex'>
    <div className='profile d-flex'>
        <div className='profile-icon'>
            <img/>
        </div>
        <div className='profile-description'>
            <h5>Chris Hermsworth</h5>
            <p>Buisness Analyst</p>
        </div>
    </div>
    <div className='logout'>
        <img/>
    </div>
</div>
        
    </nav>
    </>
  )
}

export default Header