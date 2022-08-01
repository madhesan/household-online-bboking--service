import React from 'react';
import { Carousel } from 'react-bootstrap';
import Footer from '../../components/Footer/footer';
import Navbar from '../../components/Navbar';
import './home.css';
import slide1 from '../../images/slide-1.jpg';
import slide2 from '../../images/slide-2.jpg';
import slide3 from '../../images/slide-3.jpg';
const Index = () => {

  return (
<>
   <div className="mt-6">
    <div className='intro intro-carousel'>
  
      <div className='container1'>
        <Carousel>
          <Carousel.Item interval={2000}>
            <div class="color-overlay">
              <img
                className="img"
                src={slide3}
                alt="First slide"
              />
            </div>
            <Carousel.Caption className='address'>
              <div class="intro-body">

                <h1 class="intro-title mb-4">
                  <span class="color-b"> 3/5-12</span> Annanagar
                  <br />Mettur </h1>
                <p class="intro-subtitle intro-price">
                  <span class="price-a">rent | ₹ 15,000</span>
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <div class="color-overlay">
              <img
                className="img"
                src={slide2}
                alt="Second slide"
              />
            </div>
            <Carousel.Caption className='address'>
              <div class="intro-body">
                <h1 class="intro-title mb-4">
                  <span class="color-b">1/160 </span> Bhavani
                  <br /> Komarapalayam</h1>
                <p class="intro-subtitle intro-price">
                  <span class="price-a">rent | ₹ 12,000</span>
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <Footer />
    </div>
    </div>
    </>
    
  );
};

export default Index;