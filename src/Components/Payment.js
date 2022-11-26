import React from 'react'
import Navbar from './Navbar'
import Cart from './Cart'
import CartCard from './CartCard'
import './Payment.css'
import card_img from './assets/card_img.png'

function Payment() {
    return (
        <div>
            <Navbar />
            
            <div className='proceed'>
                
                
                <a target="_blank" href="https://rzp.io/l/tl7OXxVLXk" rel="noreferrer">
                    <img src={card_img} alt="Payment" />
                </a>
            </div>
        </div>
    )
}

export default Payment