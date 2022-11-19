import React, { useState, useEffect } from 'react'
import './CartCard.css'
import { collection, deleteDoc, doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from '../FirebaseConfigs/firebaseConfig';


const CartCard = (props) => {
    const [prodquantity, setProdQuantity] = useState(props.itemdata.quantity);
    

    let p = props.itemdata.product.price
    let overalltax = 10 / 100;
    let overallcommission = 10 / 100;
    let extraforfun = 10 / 100;
    let mrp = parseInt(p)
    mrp = mrp + overalltax * mrp + overallcommission * mrp + extraforfun * mrp
    const saleprice = (mrp - extraforfun * mrp) * prodquantity

    //console.log(saleprice)

    const increasequantity = async () => {
        setProdQuantity(prodquantity + 1)

        const itemRef = (doc(db, `cart-${props.userid}`, `${props.itemdata.id}`))
        await updateDoc(itemRef, {
            quantity: prodquantity + 1
        }).then(() => { console.log('changed quantity') })
    }
    const decreasequantity = async () => {
        if (prodquantity >= 1) {
            setProdQuantity(prodquantity - 1)

            const itemRef = (doc(db, `cart-${props.userid}`, `${props.itemdata.id}`))
            await updateDoc(itemRef, {
                quantity: prodquantity - 1
            }).then(() => { console.log('changed quantity') })
        }
    }

    const deletecartitem = async () => {
        await deleteDoc(doc(db, `cart-${props.userid}`, `${props.itemdata.id}`))
            .then(() => {
                console.log('doc delete')
            })
    }

    return (
        <div className='cart-prod-container'>
            <div className='cart-prod-imgtitle'>
                <div className='prod-image'><img src={props.itemdata.product.productimage} alt='' /></div>
                <div className='prod-title'><img src={props.itemdata.product.producttitle} alt='' /></div>
            </div>
            <div className='prodquantity-div'>
                <button onClick={increasequantity}>+</button>
                <p>{prodquantity}</p>
                <button onClick={decreasequantity}>-</button>
            </div>
            <div className='prodprice'>₹{saleprice}</div>
            <button className='deletebtn' onClick={deletecartitem}>
                <img src='https://cdn.discordapp.com/attachments/1014457233393860638/1014487778018463804/delete.png' alt='' />
            </button>
        </div>
    )
}

export default CartCard
