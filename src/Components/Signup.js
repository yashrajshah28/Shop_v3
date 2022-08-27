import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
//import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth,db } from '../FirebaseConfigs/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import './Signup.css'

const Signup = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate()
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const initialcartvalue = 0;
        console.log(user);

        addDoc(collection(db, "users"), {
          username: username, email: email, phonenumber:
            phonenumber, password: password, cart: initialcartvalue,
          address: address, uid: user.uid
        }).then(() => {
          setSuccessMsg('New user added successfully, You will now be automatically redirected to login page.')
          setUserName('')
          setPhonenumber('')
          setEmail('')
          setPassword('')
          setErrorMsg('')
          setTimeout(() => {
            setSuccessMsg('');
            navigate('/login');
          }, 1000);
        })
          .catch((error) => { setErrorMsg(error.message) });
      })
      .catch((error) => {
        if (error.message == 'Firebase: Error (auth/invalid-email.') {
          setErrorMsg('Please fill all required fields')
        }
        if (error.message == 'Firebase: Error (auth/email-already-in-use).') {
          setErrorMsg('User already exists');
        }
      });
  }

  return (
    <div>
      <Navbar />
      <div className='signup-container'>
        <form className='signup-form' onSubmit={handleSubmit}>
          <p>Create Account</p>
          {successMsg && <>
            <div className='success-msg'>
              {successMsg}
            </div></>}

          {errorMsg && <>
            <div className='error-msg'>
              {errorMsg}
            </div></>}


          <label>Your Name</label>
          <input onChange={(e) => setUserName(e.target.value)}
            type='text' placeholder='First and last name' />

          <label>Mobile Number</label>
          <input onChange={(e) => setPhonenumber(e.target.value)}
            type='tel' placeholder='Mobile Number' />

          <label>Email</label>
          <input onChange={(e) => setEmail(e.target.value)}
            type='email' placeholder='Enter your email' />

          <label>Password</label>
          <input onChange={(e) => setPassword(e.target.value)}
            type='password' placeholder='Enter your password' />

          <label>Address</label>
          <textarea onChange={(e) => setAddress(e.target.value)}
            placeholder='Enter your address' />

          <button type="Submit">Sign up</button>

          <div>
            <span>Already have an account ?</span>
            <Link to='/login'>Sign In</Link>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Signup
