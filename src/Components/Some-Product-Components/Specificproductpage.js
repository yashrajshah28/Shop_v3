import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import { useParams, Link } from 'react-router-dom'
import { getDoc, doc, collection, query, where, getDocs, addDoc } from 'firebase/firestore'
import { auth, db } from '../../FirebaseConfigs/firebaseConfig'
import './Specificproductpage.css'
import ProductSlider from './ProductSlider'


const Specificproductpage = () => {
    const { id, type } = useParams()
    const [product, setProduct] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    function GetCurrentUser() {
        const [user, setUser] = useState('')
        const userCollectionRef = collection(db, "user")

        useEffect(() => {
            auth.onAuthStateChanged(userlogged => {
                if (userlogged) {
                    //console.log(userlogged.email)
                    const getUser = async () => {
                        const q = query(collection(db, "users"), where("uid", "==", userlogged.uid))
                        //console.log(q)
                        const data = await getDocs(q);
                        setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
                    }
                    getUser();
                }
                else {
                    setUser(null)
                }
            })
        }, [])
        return user
    }
    const loggeduser = GetCurrentUser();


    function GetCurrentProduct() {
        // const porductCollectionRef = collection(db, `products-${type.toUpperCase()}`);

        useEffect(() => {
            const getProduct = async () => {
                const docRef = doc(db, `products-${type.toUpperCase()}`, id);
                const docSnap = await getDoc(docRef);
                setProduct(docSnap.data());
            };
            getProduct();
        }, [])
        return product
    }
    GetCurrentProduct();

    let overalltax = 10 / 100;
    let overcommission = 10 / 100;
    let extraforfun = 10 / 100;

    let mrp = parseInt(product.price);
    mrp = mrp + overalltax * mrp + overcommission * mrp + extraforfun * mrp
    const saleprice = mrp - extraforfun * mrp

    const addtocart = () => {
        if (loggeduser) {
            addDoc(collection(db, `cart-${(loggeduser[0].uid)}`), {
                product, quantity: 1
            }).then(() => {
                setSuccessMsg('Product added to cart');
            }).catch((errorMsg) => {
                setErrorMsg(errorMsg)
            });
        }
        else {
            setErrorMsg('You need to login first')
        }
    }

    return (
        <div>
            <Navbar />
            {product ? <div className='myprod-container'>
                <div>
                    <div className='prod-img-cont'>
                        <img src={product.productimage} alt='' />
                    </div>
                    <div className='prod-data'>
                        <p className='prod-head'>{product.producttitle}</p>
                        <p className='prod-keyspecs'>{product.keyspecs}</p>

                        <div className='specific-price-container'>
                            <p className='mrp'>MRP: <p className='rate'>₹{mrp}</p></p>
                            <p className='saleprice'>Discount Price: <p className='rate'>₹{saleprice}</p></p>
                            <p className='yousave'>You Save: ₹{mrp - saleprice}</p>
                        </div>

                        <p className='prod-details-head'>Details</p>
                        <p className='prod-description'>{product.description}</p>

                        <div className='row-cont'>

                            <div className='warranty-replacement'>
                                <div className='cod'>
                                    <div className='img-circle'>
                                        <img src='https://cdn.discordapp.com/attachments/1014457233393860638/1014457321998532648/payment.png' alt='' />
                                    </div>
                                    <p>Cash on Delivery</p>
                                </div>
                                <div className='warranty'>
                                    <div className='img-circle'>
                                        <img src='https://cdn.discordapp.com/attachments/1014457233393860638/1014458009184899083/warranty.png' alt='' />
                                    </div>
                                    <p>{product.warranty} year warranty</p>
                                </div>
                                <div className='replacement'>
                                    <div className='img-circle'>
                                        <img src='https://cdn.discordapp.com/attachments/1014457233393860638/1014458008383799396/replacement.png' alt='' />
                                    </div>
                                    <p>10 days replacement</p>
                                </div>
                            </div>
                            <div className='buy-cart'>
                                <Link to="/payment"><button className='btn'>Buy Now</button></Link>
                                <button className='btn' onClick={addtocart}>Add to cart</button>
                            </div>
                        </div>
                        {successMsg && <>
                            <div className='success-msg'>{successMsg}</div>
                        </>}
                        {errorMsg && <>
                            <div className='error-msg'>{errorMsg}</div>
                        </>}
                    </div>
                </div>
            </div> :
                <div>
                    Loading...
                </div>
            }
            <p className='prod-details-head2'>Similar Items</p>
            <ProductSlider type={type}></ProductSlider>
        </div>
    )
}

export default Specificproductpage
