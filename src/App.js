import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Cart from './Components/Cart';
import UserProfile from './Components/UserProfile';
import Payment from './Components/Payment';
import PgFOF from './Components/PgFOF';
import Addproduct from './Components/Addproduct';
import Allproductpage from './Components/Some-Product-Components/Allproductpage';
//import Productcontainer from './Components/Some-Product-Components/Productcontainer';
import Specificproductpage from './Components/Some-Product-Components/Specificproductpage';
import Footer from './Components/Footer';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/signup" element={<Signup/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/cart" element={<Cart/>} />
        <Route exact path="/userprofile" element={<UserProfile/>} />
        <Route exact path="/sellproduct" element={<Addproduct/>} />

        <Route exact path="/product-type/mobiles" element={<Allproductpage type={'Mobile'} />} />
        <Route exact path="/product-type/laptops" element={<Allproductpage type={'Laptop'} />} />
        <Route exact path="/product-type/cameras" element={<Allproductpage type={'Camera'} />} />
        <Route exact path="/product-type/fashion" element={<Allproductpage type={'Fashion'} />} />
        <Route exact path="/product-type/shoes" element={<Allproductpage type={'Shoes'} />} />
        <Route exact path="/product-type/furniture" element={<Allproductpage type={'Furniture'} />} />
        <Route exact path="/cartdata" element={<Cart />} />
        <Route exact path="/payment" element={<Payment />} />
      

        <Route path="/product/:type/:id" element={<Specificproductpage />} />

        

        <Route path="*" element={<PgFOF/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
    
  );
}

export default App;
