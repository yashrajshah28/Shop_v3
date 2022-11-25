import React from 'react'
import Navbar from './Navbar'
import Cart from './Cart'
import CartCard from './CartCard'
import './Payment.css'
import { useParams, Link } from 'react-router-dom'

const Payment = () => {
    return (
        <div>
            <Navbar />
            <div className='paymentfrom'>
                <h2>Payment</h2>
                <h4>Cards Accepted :</h4>

                    <label>Name on Card</label>
                    <input type='text' placeholder='First and last name' />
                    <br></br>

                    <label>Card Number :</label>
                    <input type='integer' placeholder='Card Number' />
                    <br></br>
                    <label>Exp Month :</label>
                    <input type='number' placeholder="Exp Month" />
                    <br></br>
                    <label>Exp Year :</label>
                    <input type='number' placeholder="Exp Year" />
                    <br></br>
                    <label>CVV :</label>
                    <input type='integer' placeholder="CVV" />
                    <br></br>
            </div>
            <div className='proceed'>
                <Link to= "https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_KkDmcpV3MMgbFW" async><button>Proceed</button></Link>
            </div>
        </div>
    )
}

export default Payment