import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Layout from './common/Layout'
import cartImg from '../images/cart.jpg';
import { useSelector, useDispatch } from 'react-redux';
import { products } from './redux/products';


const Gallery = () => {
    const [filterProducts, setFilterProducts] = useState("");
    const cart = useSelector((state) => state);
    console.log("products added in cart", cart)
    var badge = cart.length;
    console.log("badge", badge);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const authentication = sessionStorage.getItem("auth");
        console.log("auth", authentication);
        if (authentication) {
            navigate('/')
        }
        else {
            navigate('/login')
        }

    }, [])

    const handleChange = (e) => {
        setFilterProducts(e.target.value);
    }

    return (
        <>
            <Layout>
                <div className='container '>
                    <div className='head-row d-flex justify-content-between align-items-center'>
                        <div className='search'>
                            <input type='text' placeholder='Search products' onChange={handleChange} />
                        </div>
                        <Link to='/cartDetails'>
                            <div className='cart-img'>
                                <img src={cartImg} alt="cart"></img>
                                <span className='badge text-dark'>{badge}</span>
                            </div>
                        </Link>
                    </div>
                    <div className='row'>
                        {products.filter((item) => {
                            if (filterProducts === "") {
                                return item
                            }
                            else if (item.title.toLowerCase().includes(filterProducts.toLowerCase())) {
                                return item
                            }
                        }).map((item, i) => {
                            item.quantity = 1;
                            return (
                                <>
                                    <div key={i} className='col-3'>
                                        <div className='gallery-card card p-3'>
                                            {item.status == "" ? null : <span className='trending'>{item.status}</span>}
                                            <div className='img-wrapper'>
                                                <div className='img-wrapper'>
                                                    <img src={require(`../images/${item.image}`)} alt='products' />
                                                </div>
                                            </div>
                                            <div className='title'>{item.title}</div>
                                            <div><span className='price'>MRP: ₹{item.price}</span><span className='qty'>(250Ml)</span></div>
                                            <div className='taxes'>( Incl. of all taxes )</div>
                                            {/* <div>{item.description}</div>
                                <div className='rating'>rating</div>
                                <div className='reviews'>review</div>
                                <div className='coupon-coude'>{item.coupons}</div> */}
                                            <div className='d-flex justify-content-center'>
                                                <button className='btn btn-add-to-cart' onClick={() => { dispatch({ type: "ADD", payload: item }) }}>Add to cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )

                        })}
                    </div>
                </div>
            </Layout>



        </>
    )
}

export default Gallery