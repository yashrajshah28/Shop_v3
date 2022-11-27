import React from 'react'
import Navbar from './Navbar'
import './Payment.css'
import card_img from './assets/card_img.png'
import success from './assets/success.svg'

function Payment() {
    return (
        <div>
            <Navbar />
            <div className='payment-text-1'>
                <h1>
                <p>Thank You for shopping with us.</p> 
                </h1>
            </div>
            <div className='payment-text-2'>
                <h1>
                <p>Click on bellow payment method button.</p>
                </h1>
            </div>
            <div className='payment'>
                <a target="_blank" href="https://rzp.io/l/tl7OXxVLXk" rel="noreferrer">
                    <img src={card_img} alt="Payment" />
                </a>
            </div>
            <div className='success'>
                <img src={success} alt='Payment' />
            </div>
            
        </div>
    )
}

export default Payment