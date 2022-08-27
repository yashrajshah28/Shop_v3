import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Products from './Products'
import Banner from './Banner'
import { auth, db } from '../FirebaseConfigs/firebaseConfig'
import { collection, getDocs, query, where } from 'firebase/firestore'

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
      <p>{loggeduser ? loggeduser[0].email:"No data"}</p>
    </div>
  )
}

export default Home
