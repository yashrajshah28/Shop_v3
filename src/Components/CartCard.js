import React, { useState , useEffect } from 'react'
import './CartCard.css'
import { doc, setDoc } from "firebase/firestore";
import{ db } from '../FirebaseConfigs/firebaseConfig';


const CartCard = (itemdata) => {
    let p = itemdata.itemdata.product.price
    let overalltax = 10 / 100;
    let overallcommission = 10 / 100;
    let extraforfun = 10 / 100;
    let mrp = parseInt(p)
    mrp = mrp + overalltax * mrp + overallcommission * mrp + extraforfun * mrp
    const saleprice = mrp - extraforfun * mrp

    const [prodquantity, setProdQuantity] = useState(itemdata.itemdata.quantity);
    const increasequantity = () => {
        setProdQuantity(prodquantity + 1)
    }
    const decreasequantity = () => {
        if (prodquantity >= 1) {
            setProdQuantity(prodquantity - 1)
        }
    }

    const deletecartitem = () => {}

    return (
        <div className='cart-prod-container'>
            <div className='cart-prod-imgtitle'>
                <div className='prod-image'><img src={itemdata.itemdata.product.productimage} alt='' /></div>
                <div className='prod-title'><img src={itemdata.itemdata.product.producttitle} alt='' /></div>
            </div>
            <div className='prodquantity-div'>
                <button onClick={increasequantity}>+</button>
                <p>{prodquantity}</p>
                <button onClick={decreasequantity}>-</button>
            </div>
            <div className='prodprice'>${saleprice}</div>
            <button className='deletebtn' onClick={deletecartitem}>
                <img src='https://cdn.discordapp.com/attachments/1014457233393860638/1014487778018463804/delete.png' alt=''/>
            </button>
        </div>
    )
}

export default CartCard
