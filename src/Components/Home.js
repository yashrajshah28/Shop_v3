import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Products from './Products'
import Banner from './Banner'
import Footer from './Footer'
import { auth, db } from '../FirebaseConfigs/firebaseConfig'
import { collection, getDocs, query, where } from 'firebase/firestore'
import ProductSlider from './Some-Product-Components/ProductSlider'
import './Home.css'

const Home = () => {
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
  //if(loggeduser){console.log(loggeduser[0].email)}

  return (
    <div>
      <Navbar />
      <Banner />
      <Products />
      
      <div className='slider-head'><p>Limited Time Deals</p></div>
      <ProductSlider type={'Mobile'} />
      <ProductSlider type={'Laptop'} />
      <ProductSlider type={'Camera'} />
      <ProductSlider type={'Fashion'} />
      <ProductSlider type={'Shoes'} />
      <ProductSlider type={'Furniture'} />
      
    </div>
  )
}

export default Home
