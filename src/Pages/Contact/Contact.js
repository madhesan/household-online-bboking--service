import React from 'react';
import Footer from '../../components/Footer/footer';
import Navbar from '../../components/Navbar';

const Contact = () => {
    return (
        <div>
            <Navbar/>
            <section className="intro-single">
                <div className="container">
                            <div className="title-single-box">
                                <h1 className="title-single">Contact US</h1>
                            </div> 
                </div>
            </section>


            <section className="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="contact-map box">
                                <div id="map" className="contact-map">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.826470171063!2d77.60483861475355!3d11.274163191984925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96d7810fe32d5%3A0x85cf49c5b26fb72e!2sKongu%20Engineering%20College!5e0!3m2!1sen!2sin!4v1631417140729!5m2!1sen!2sin" width={1000} height={550} style={{ border: 0 }} allowFullScreen loading="lazy" />
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-sm-12 section-t8">
                            <div className="row">
                                <div className="col-md-7">
                                <br/> <br/>
                                    <form className="form-a contactForm" action method="post" role="form">
                                        <div id="errormessage" />
                                        <div className="row">
                                            <div className="col-md-6 mb-3">
                                                <div className="form-group">
                                                    <input type="text" name="name" className="form-control form-control-lg form-control-a" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                                    <div className="validation" />
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <div className="form-group">
                                                    <input name="email" type="email" className="form-control form-control-lg form-control-a" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                                    <div className="validation" />
                                                </div>
                                            </div>
                                            <div className="col-md-12 mb-3">
                                                <div className="form-group">
                                                    <input type="text" name="subject" className="form-control form-control-lg form-control-a" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                                    <div className="validation" />
                                                </div>
                                            </div>
                                            <div className="col-md-12 mb-3">
                                                <div className="form-group">
                                                    <textarea name="message" className="form-control" cols={45} rows={8} data-rule="required" data-msg="Please write something for us" placeholder="Message" defaultValue={""} />
                                                    <div className="validation" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <button type="submit" className="btn btn-primary">Send Message</button>
                                            </div>
                                        </div>
                                    </form>
                                    <br/>
                                </div>
                                <div className="col-md-5 section-md-t3">

                                <br/> <br/>
                                    <div className="icon-box section-b2">
                                        <div className="icon-box-icon">
                                            <span className="ion-ios-paper-plane" />
                                        </div>
                                        <div className="icon-box-content table-cell">
                                            <div className="icon-box-title">
                                                <h4 className="icon-title">Say Hello</h4>
                                            </div>
                                            <div className="icon-box-content">
                                                <p className="mb-1">Email.
                                                    <span className="color-a">contacthobs@gmail.com</span>
                                                </p>
                                                <p className="mb-1">Phone.
                                                    <span className="color-a">+91 9876543210</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="icon-box section-b2">
                                        <div className="icon-box-icon">
                                            <span className="ion-ios-pin" />
                                        </div>
                                        <div className="icon-box-content table-cell">
                                            <div className="icon-box-title">
                                                <h4 className="icon-title">Find us in</h4>
                                            </div>
                                            <div className="icon-box-content">
                                                <p className="mb-1">
                                                    No.6, Gandhi Road, , Avinashi Road,
                                                    <br />Coimbatore-641652<br />
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
            <div/>
        </div>
    );
};

export default Contact;