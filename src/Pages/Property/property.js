import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './property.css';
import propertyimg1 from '../../images/property-1.jpg'
import property2 from '../../images/property-2.jpg'
import property3 from '../../images/property-3.jpg'
import property4 from '../../images/property-4.jpg'
import property5 from '../../images/property-5.jpg'
import property6 from '../../images/property-6.jpg'
import property7 from '../../images/property-7.jpg'
import property8 from '../../images/property-8.jpg'
import property9 from '../../images/property-9.jpg'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer/footer';

import { Link } from 'react-router-dom';
const Property = () => {
    return (
        <div>
            <Navbar />
            <section className="intro-single">
                <div className="container">
                            <div className="title-single-box">
                                <h1 className="title-single">Property</h1>
                            </div> 
                </div>
            </section>

            <div className='container'>

                <div className='row gy-3 my-3'>
                    <div className='col-sm'>
                        <div class='card' style={{ width: '18rem' }}>            <Card>
                            <Card.Img variant="top" src={propertyimg1} style={{ height: '15rem' }} />
                            <Card.Body className='card-body'>
                                <Card.Title className='card-title'>Coimbatore</Card.Title>
                                <p>Pollachi-634250</p>
                                <Card.Text className='card-text'>
  
                                </Card.Text>
                               <Link to="/property1"> <Button variant="btn btn-primary">Click Here To Booking</Button></Link>
                            </Card.Body>
                        </Card>
                        </div>
                    </div>
                    <div className='col-sm'>
                        <div style={{ width: '18rem' }}>            <Card>
                            <Card.Img variant="top" src={property2} style={{ height: '15rem' }} />
                            <Card.Body className='card-body'>
                                <Card.Title className='card-title'>Chennai</Card.Title>
                                <p>ECR road-600023</p>
                                <Button variant="btn btn-primary">Click Here To Booking</Button>
                            </Card.Body>
                        </Card>
                        </div>
                    </div>
                    <div className='col-sm'>
                        <div style={{ width: '18rem' }}>            <Card>
                            <Card.Img variant="top" src={property3} style={{ height: '15rem' }} />
                            <Card.Body className='card-body'>
                                <Card.Title className='card-title'>Salem</Card.Title>
                               <p>Mettur-636303</p>
                                <Button variant="btn btn-primary">Click Here To Booking</Button>
                            </Card.Body>
                        </Card>
                        </div>
                    </div>
                </div>
                <div className='row gy-3 my-3'>
                    <div className='col-sm'>
                        <div style={{ width: '18rem' }}>            <Card>
                            <Card.Img variant="top" src={property4} style={{ height: '15rem' }} />
                            <Card.Body className='card-body'>
                                <Card.Title className='card-title'>Erode</Card.Title>
                                <p>Perundhurai-638052</p>
                                <Button variant="btn btn-primary">Click Here To Booking</Button>
                            </Card.Body>
                        </Card>
                        </div>
                    </div>
                    <div className='col-sm'>
                        <div style={{ width: '18rem' }}>            <Card>
                            <Card.Img variant="top" src={property5} style={{ height: '15rem' }} />
                            <Card.Body className='card-body'>
                                <Card.Title className='card-title'>Namakkal</Card.Title>
                                <p>Rasipuram-654123</p>
                                <Button variant="btn btn-primary">Click Here To Booking</Button>
                            </Card.Body>
                        </Card>
                        </div>
                    </div>
                    <div className='col-sm'>
                        <div style={{ width: '18rem' }}>            <Card>
                            <Card.Img variant="top" src={property6} style={{ height: '15rem' }} />
                            <Card.Body className='card-body'>
                                <Card.Title className='card-title'>Ooty</Card.Title>
                               <p>Mettupalayam-687452</p>
                                <Button variant="btn btn-primary">Click Here To Booking</Button>
                            </Card.Body>
                        </Card>
                        </div>
                    </div>
                </div>
                <div className='row gy-3 my-3'>
                    <div className='col-sm'>
                        <div style={{ width: '18rem' }}>            <Card>
                            <Card.Img variant="top" src={property7} style={{ height: '15rem' }} />
                            <Card.Body className='card-body'>
                                <Card.Title className='card-title'>Kodaikanal</Card.Title>
                             <p>Pine Forest-674521</p>
                                <Button variant="btn btn-primary">Click Here To Booking</Button>
                            </Card.Body>
                        </Card>
                        </div>
                    </div>
                    <div className='col-sm'>
                        <div style={{ width: '18rem' }}>            <Card>
                            <Card.Img variant="top" src={property8} style={{ height: '15rem' }} />
                            <Card.Body className='card-body'>
                                <Card.Title className='card-title'>Thanjavur</Card.Title>
                               <p>	Avarampatti-658923</p>
                                <Button variant="btn btn-primary">Click Here To Booking</Button>
                            </Card.Body>
                        </Card>
                        </div>
                    </div>
                    <div className='col-sm'>
                        <div style={{ width: '18rem' }}>            <Card>
                            <Card.Img variant="top" src={property9} style={{ height: '15rem' }} />
                            <Card.Body className='card-body'>
                                <Card.Title className='card-title'>Theni</Card.Title>
                                <p>Megamalai-687452</p>
                                <Button variant="btn btn-primary">Click Here To Booking</Button>
                            </Card.Body>
                        </Card>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Property;