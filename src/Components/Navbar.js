import React, { useState, useEffect } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import './Navbar.css'
import cartlogo from './assets/cartlogo.png'
import profilelogo from './assets/profilelogo.png'
import { auth, db } from '../FirebaseConfigs/firebaseConfig'
import { collection, getDocs, query, where } from 'firebase/firestore'
import applogo from '../Components/assets/applogo.png'

const Navbar = () => {
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
  const navigate = useNavigate()
  const handleLogout = () => {
    auth.signOut().then(() => {
      navigate("/login")
    })
  }

  return (
    <div>
      <div className='navbar'>
        <div className='LeftContainer'>
          <img src={applogo} />
        </div>
        <div className='RightContainer'>
          {!loggeduser && <nav>
            <Link to='/'> <button>Home</button></Link>
            <Link to='/signup'> <button>Signup</button></Link>
            <Link to='/login'> <button>Login</button></Link>

            <div className='cart-btn'>
              <img src={cartlogo} alt="no img" />
              <span className='cart-icon-css'>0</span>
            </div>
            <Link to="userprofile">
              <img src={profilelogo} className='profile-icon' />
            </Link>
          </nav>}

          {loggeduser &&
            <nav>
              <Link to='/'><button>Home</button></Link>
              <Link to='/sellproduct'><button>Sell</button></Link>

              <Link to="cart">
                <div className='cart-btn'>
                  <img src={cartlogo} alt="no img" />
                  <span className='cart-icon-css'>{loggeduser[0].cart}</span>
                </div>
              </Link>
              <Link to="userprofile">
                <img src={profilelogo} className='profile-icon' />
              </Link>
              <button className='logout-btn' onClick={handleLogout}>Logout</button>
            </nav>
          }

        </div>
      </div>
      <div className='product-types'>
        <a href='/product-type/mobiles'><button>Mobiles</button></a>
        <a href='/product-type/laptops'><button>Laptops</button></a>
        <a href='/product-type/cameras'><button>Cameras</button></a>
        <a href='/product-type/fashion'><button>Fashion</button></a>
        <a href='/product-type/shoes'><button>Shoes</button></a>
        <a href='/product-type/furniture'><button>Furniture</button></a>
      </div>
    </div>
  )
}

export default Navbar
