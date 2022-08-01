import React from 'react';
import Navbar from '../../components/Navbar';
import about from '../../images/slide-about-1.webp'
import about1 from '../../images/about-2.jpg'
import './about.css';
import Footer from '../../components/Footer/footer';
const About = () => {
    return (
        <div>
            <Navbar />
            <div className='intro-single'>
                <div class="container">
                            <div class="title-single-box">
                                <h1 class="title-single">We Do Great Design For Creative Folks</h1>
                            </div>
                </div>
            </div>



            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="about-img-box">
                            <img src={about} style={{ height: '600px', width: '1800px' }} alt="" class="img-fluid" />

                        </div>

                        <div class="sinse-box">
                            <h3 class="sinse-title">Amigos-Household
                                <span></span>
                                <br /> Since 2021
                            </h3>
                            <p>Art & Creative</p>
                        </div>
                    </div>

                    <div className='section-about'>
                    <div >
                                    <div class="title-box-d">
                                        <h3 class="title-d">Our team
                                            <span class="color-d"></span>
                                            <br />
                                        </h3>
                                    </div>
                                    <p class="color-text-a">

                                        Educating and empowering the Amigos-Household community by providing the freshest news and latest best
                                        practices via the industry’s smartest practitioners.

                                        Launched in 2021, Amigos-Household is unique in its community-based approach to search marketing
                                        content. Virtually all of our contributed articles come from real online marketing experts, both
                                        independent and in-house.


                                    </p>
                                </div>
                    </div>
                </div>
            </div>

<Footer/>
        </div>
    );
};

export default About;