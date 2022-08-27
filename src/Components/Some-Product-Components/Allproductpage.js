import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar'
import './Allproductpage.css'
import Productcontainer from './Productcontainer'
import { collection, query, onSnapshot, getDocs, querySnapshot } from "firebase/firestore"
import { db } from "../../FirebaseConfigs/firebaseConfig"

const Allproductpage = (props) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = () => {
      const productsArray = [];
      const path = `products-${props.type.toUpperCase()}`;
      //console.log(path);

      getDocs(collection(db, path)).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          productsArray.push({ ...doc.data(), id: doc.id })
          console.log(doc.id, "=>", doc.data());
        })
        setProducts(productsArray)
      }).catch((error) => {
        console.log(error.message);
      })

    }
    getProducts();
  }, [props.type])
  console.log(props.type)
  return (
    <div className='allproductpage'>
      <Navbar />
      <div className='heading'>
        <p>Top Results for {props.type}</p>
      </div>
      <div className='allproductcontainer'>
        {products.map((product) => {
          return(
          <Productcontainer
            key={product.id}
            product={product}
          />)
        })}
      </div>
    </div>
  )
}

export default Allproductpage
