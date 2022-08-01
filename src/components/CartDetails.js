import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from './common/Layout';
import { useSelector, useDispatch } from 'react-redux';


const CartDetails = () => {
  const [totalPriceAmount, setTotalPriceAmount] = useState(0);
  const navigate = useNavigate();
  const cart = useSelector((state) => state);
  const dispatch = useDispatch()


  const totalPrice = cart.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity
  }, 0)
  useEffect(() => {
    setTotalPriceAmount(totalPrice)

  }, [totalPrice]);


  const handleCheckout = () => {
    if (totalPrice > 0) {
      navigate('/checkout')
    }

  }
  return (
    <>
      <Layout>

        <div className='container'>
          <div className='row'>
            <div className='col-8'>
              <div className='row'>
                <div className='col-12'>
                  {cart.length ? (cart.map((item) => {
                    return (
                      <>
                        <div className='card p-3 mb-2' key={item.id}>
                          <div className='wrapper d-flex justify-content-between'>
                            <div className='left-side'>
                              <div className='d-flex'>
                                <div className='img-wrapper'>
                                  <div className='img-wrapper'>
                                    <img src={require(`../images/${item.image}`)} alt='products' />
                                  </div>
                                </div>
                                <div className='mid'>
                                  <div className='text-bold title'>{item.title}</div>
                                  {/* <div>{item.description}</div> */}
                                  <div className='text-bold item-price'>Item price:{item.price}</div>
                                  <div className='text-bold price'>Total price: {item.price * item.quantity}</div>
                                </div>
                              </div>

                            </div>


                            <div className='right-side'>
                              <h6 className='Quantity d-flex justify-content-end'>Quantity</h6>
                              <div className='quantity-adjust d-flex align-items-center justify-content-end'>
                                <button className='btn btn-warning' onClick={() => { dispatch({ type: "INCREASE", payload: item }) }}>+</button>
                                <div className='mx-2'>{item.quantity}</div>
                                <button className='btn btn-warning my-2 ' onClick={() => {
                                  if (item.quantity > 1) {
                                    dispatch({ type: "DECREASE", payload: item })
                                  }
                                  else {
                                    dispatch({ type: "REMOVE", payload: item })
                                  }
                                }}
                                >-</button>
                              </div>
                              <button className='btn btn-danger delete-btn' onClick={() => { dispatch({ type: "REMOVE", payload: item }) }}>Delete</button>
                            </div>
                          </div>
                        </div>
                      </>
                    )
                  })) : (<h6>No products Added</h6>)}
                </div>

              </div>
            </div>
            <div className='col-4'>

              <div className='card proceed-to-checkout' >
                <div className='card-header price '>ORDER SUMMARY</div>
                <div className='card-body'>
                  <div className='d-flex justify-content-between'>
                    <p>Price</p>
                    <p>{totalPriceAmount}</p>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <p>Discount</p>
                    <p>-200</p>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <p>GST</p>
                    <p>100</p>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <p>Delivery Charges</p>
                    <p>0.00</p>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <p className=' price'>Total price</p>
                    <p className='price'>{totalPriceAmount - 200 + 100}</p>
                  </div>
                </div>


                <button className='btn btn-success' onClick={handleCheckout}>Proceed to checkout</button>
              </div>

            </div>
          </div>
        </div>
      </Layout>


    </>
  )
}

export default CartDetails