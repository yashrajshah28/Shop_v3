import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'
import slide1 from './assets/bannerimages/1.png'
import slide2 from './assets/bannerimages/2.png'
import slide3 from './assets/bannerimages/3.png'
import slide4 from './assets/bannerimages/4.png'
import React from 'react'

const Banner = () => {
    
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>DHAMAKA OFFER</h3>
          <p>Use your discount coupon and get your surprise </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>SALE 25% OFF</h3>
          <p>Black Friday Offer</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>BUY 2 GET 1 FREE</h3>
          <p>
            On Every Purchase
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide4}
          alt="Fourth slide"
        />

        <Carousel.Caption>
          <h3>BRANDS OF THE WEEK</h3>
          <p>
            Get your T-shirts, footwear and many more under ₹299
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Banner



