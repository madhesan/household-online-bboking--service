import React from 'react';
import './property1.css';
import propertyimg1 from '../../images/property-1.jpg'
import property2 from '../../images/property-2.jpg'
import agent from '../../images/vijay.jpg';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer/footer';
const Property1 = () => {
  return (
    <div>
      <Navbar/>
      <section class="property-single nav-arrow-b">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div>
                <h1>Coimbatore</h1>
                <p>Pollachi-635412</p>
                <img
                  className="img1"
                  src={property2}
                  style={{ height: '45rem', width: '57rem' }}
                />
              </div><br></br>
              <div class="row justify-content-between">
                <div class="col-md-5 col-lg-4">
                  <div class="property-price d-flex justify-content-center foo">
                    <div class="card-header-c d-flex">
                      <div class="card-box-ico">
                       <h2> <span class="ion-money"><b>₹</b></span></h2>
                      </div>
                      <div class="card-title-c align-self-center">
                        <h2 class="title-c"><b>12,000</b></h2>
                      </div>
                    </div>
                  </div>
                  <div class="property-summary">
                    <div class="row">
                      <div class="col-sm-12">
                        <div class="title-box-d section-t4">
                          <h3 class="title-d">Quick Summary</h3>
                        </div>
                      </div>
                    </div>
                    <div class="summary-list">
                      <ul class="list">
                        <li class="d-flex justify-content-between">
                          <strong>Location:Coimbatore,Pollachi-642001</strong>
                          <span></span>
                        </li>
                        <li class="d-flex justify-content-between">
                          <strong>Property Type:</strong>
                          <span>House</span>
                        </li>
                        <li class="d-flex justify-content-between">
                          <strong>Status:</strong>
                          <span>Rent</span>
                        </li>
                        <li class="d-flex justify-content-between">
                          <strong>Area:</strong>
                          <span>340m
                            <sup>2</sup>
                          </span>
                        </li>
                        <li class="d-flex justify-content-between">
                          <strong>Beds:</strong>
                          <span>2</span>
                        </li>
                        <li class="d-flex justify-content-between">
                          <strong>Baths:</strong>
                          <span>2</span>
                        </li>
                        <li class="d-flex justify-content-between">
                          <strong>Garage:</strong>
                          <span>1</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-md-7 col-lg-7 section-md-t3">
                  <div class="row">
                    <div class="col-sm-12">
                      <div class="title-box-d">
                        <h3 class="title-d">Property Description</h3>
                      </div>
                    </div>
                  </div>
                  <div class="property-description">
                    <p class="description color-text-a">
                      Gorgeous 2-bedroom , 2-bathroom home in beautiful Silver Lake. This property offers 340m square feet of living space. Your family and loved ones will enjoy the spacious backyard, perfect for family gatherings! Come and take a look at this beauty....Don't miss out!
                    </p>
                  </div>
                  <div class="row section-t3">
                    <div class="col-sm-12">
                      <div class="title-box-d">
                        <h3 class="title-d">Amenities</h3>
                      </div>
                    </div>
                  </div>
                  <div class="amenities-list color-text-a">
                    <ul class="list-a no-margin">
                      <li>Balcony</li>
                      <li>Outdoor Kitchen</li>
                      <li>Cable Tv</li>
                      <li>Tennis Courts</li>
                      <li>Internet</li>
                      <li>Parking</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-12">
              <div class="row section-t3">
                <div class="col-sm-12">
                  <div class="title-box-d">
                    <h3 class="title-d">Contact Agent</h3>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 col-lg-4">
                  <img src={agent} alt="" class="img-fluid" />
                </div>
                <div class="col-md-6 col-lg-4">
                  <div class="property-agent">
                    <h4 class="title-agent">Vijay</h4>
                    <ul class="list-unstyled">
                      <li class="d-flex justify-content-between">
                        <strong>Phone:</strong>
                        <span class="color-text-a">+91 9874563210</span>
                      </li>
                      <li class="d-flex justify-content-between">
                        <strong>Email:</strong>
                        <span class="color-text-a">vijay@gmail.com</span>
                      </li>
                      <li class="d-flex justify-content-between">
                        <strong>Skype:</strong>
                        <span class="color-text-a">vijay.actor</span>
                      </li>
                    </ul>
                    <div class="socials-a">
                      <ul class="list-inline">
                        <li class="list-inline-item">
                          <a href="#">
                            <i class="fa fa-facebook" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li class="list-inline-item">
                          <a href="#">
                            <i class="fa fa-twitter" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li class="list-inline-item">
                          <a href="#">
                            <i class="fa fa-instagram" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li class="list-inline-item">
                          <a href="#">
                            <i class="fa fa-pinterest-p" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li class="list-inline-item">
                          <a href="#">
                            <i class="fa fa-dribbble" aria-hidden="true"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-md-12 col-lg-4">
                  <div class="property-contact">
                    <form class="form-a">
                      <div class="row">
                        <div class="col-md-12 mb-1">
                          <div class="form-group">
                            <input type="text" class="form-control form-control-lg form-control-a" id="inputName"
                              placeholder="Name *" required />
                          </div>
                        </div>
                        <div class="col-md-12 mb-1">
                          <div class="form-group">
                            <input type="email" class="form-control form-control-lg form-control-a" id="inputEmail1"
                              placeholder="Email *" required />
                          </div>
                        </div>
                        <div class="col-md-12 mb-1">
                          <div class="form-group">
                            <textarea id="textMessage" class="form-control" placeholder="Comment *" name="message" cols="45"
                              rows="8" required></textarea>
                          </div>
                        </div>
                        <div class="col-md-12">
                          <button type="submit" class="btn btn-primary">Send Message</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};
export default Property1;