import React from 'react'
import Layout from './common/Layout';
import success from '../images/thanks.png'

const Checkout = () => {
  return (
    <>
    <Layout>
    <div className='order'>
      <div className='container justify-content-center w-75'>
        <div className='img-wrap1per'>
          <img src={success} alt="thanks"/>
       
        </div>
        <h5>Thank You</h5>
          <p>Your Order has been placed!</p>
      </div>
      
      
      
      </div>
    </Layout>
    </>
  )
}

export default Checkout