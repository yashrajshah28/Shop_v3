import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import { auth, db } from '../FirebaseConfigs/firebaseConfig'
import { updateProfile } from 'firebase/auth'
import { collection, getDocs, query, where, doc, updateDoc } from 'firebase/firestore'
import './UserProfile.css'


const UserProfile = () => {
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
  if (loggeduser) { console.log(loggeduser[0].email) }


  return (
    <div>
      <Navbar />
      <div className='userprofile-outercontainer'>
        {loggeduser ? <div className='user-profile'>
          <p>Your Account Details</p>

          <div className='data-row'>
            <span>Your Name</span>
            <span>{loggeduser[0].username}</span>
          </div>

          <div className='data-row'>
            <span>Email</span>
            <span>{loggeduser[0].email}</span>
          </div>

          <div className='data-row'>
            <span>Phone Number</span>
            <span>{loggeduser[0].phonenumber}</span>
          </div>

          <div className='data-row'>
            <span>Address</span>
            <span>{loggeduser[0].address}</span>
          </div>

        </div> :
          <div>
            You are not Logged In
          </div>}
      </div>
    </div>
  )
}

export default UserProfile
