import React from 'react';
import './Cart.css';
import Image from '../assets/images/search-img.jpg';


function Cart() {
    return (


        <div className="wrapper">

            <div className='container'>

                <div className='box'>
                    <h1 className="header">Shopping Cart</h1>
                    <h4 className="course-count">0 Courses in Cart</h4>
                </div>
                <div className='box'>
                    <section style={{ border: '1px solid #D3D3D3' }} >
                        <img src={Image} className='h-[200px] pb-[20px]' alt="Search" />
                        <p>Your cart is empty. Keep shopping to find a course!</p>
                        <br />
                        <a href='' className='shopping'>Keep shopping</a>
                    </section>
                </div>
            </div>

        </div>


    );
}
export default Cart