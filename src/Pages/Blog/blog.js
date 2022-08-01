import React from 'react';
import Card from 'react-bootstrap/Card';
import './blog.css';
import post1 from '../../images/post-1.jpg'
import post2 from '../../images/post-2.jpg'
import post3 from '../../images/post-3.jpg'
import post4 from '../../images/post-4.jpg'
import post5 from '../../images/post-5.jpg'
import post6 from '../../images/post-7.jpg'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer/footer';
const Blog = () => {
    return (
        <div>
            <Navbar />
            <section className="intro-single">
                <div className="container">
                            <div className="title-single-box">
                                <h1 className="title-single">Blog</h1>
                            </div> 
                </div>
            </section>

            <div className='container'>

                <div className='row gy-3 my-3'>
                    <div className='col-sm'>
                        <div class='card' className='bg-image hover-zoom' style={{ width: '18rem' }}>            <Card>
                            <Card.Img variant="top" src={post1} style={{ height: '19rem',width:'18rem' }} className="opacity" />

                            <Card.Body className='card-body1'>
                                <Card.Title className='card-title' style={{color:'white'}}><h4><b>Ooty</b></h4></Card.Title>
                               
                            </Card.Body>
                        </Card>
                        </div>
                    </div>
                    <div className='col-sm'>
                        <div style={{ width: '18rem' }}>            <Card>
                            <Card.Img variant="top" src={post2} style={{ height: '19rem',width:'18rem' }} className="opacity"/>
                            <Card.Body className='card-body1'>
                                <Card.Title className='card-title' style={{color:'white'}}><h4><b>Kodaikanal</b></h4></Card.Title>
                               
                            </Card.Body>
                        </Card>
                        </div>
                    </div>
                    <div className='col-sm'>
                        <div style={{ width: '18rem' }}>            <Card>
                            <Card.Img variant="top" src={post3} style={{height: '19rem',width:'18rem'}} className="opacity"/>
                            <Card.Body className='card-body1'>
                                <Card.Title className='card-title' style={{color:'white'}}><h4><b>Mahabalipuram</b></h4></Card.Title>
                              
                            </Card.Body>
                        </Card>
                        </div>
                    </div>
                </div>
                <div className='row gy-3 my-3'>
                    <div className='col-sm'>
                        <div style={{ width: '18rem' }}>            <Card>
                            <Card.Img variant="top" src={post4} style={{ height: '19rem',width:'18rem' }} className="opacity"/>
                            <Card.Body className='card-body1'>
                            <Card.Title className='card-title' style={{color:'white'}}><h4><b>Yercaud</b></h4></Card.Title>
                            </Card.Body>
                        </Card>
                        </div>
                    </div>
                    <div className='col-sm'>
                        <div style={{ width: '18rem' }}>            <Card>
                            <Card.Img variant="top" src={post5} style={{ height: '19rem',width:'18rem' }} className="opacity"/>
                            <Card.Body className='card-body1'>
                                <Card.Title className='card-title' style={{color:'white'}}><h4><b>Valpaarai</b></h4></Card.Title>
                            
                            </Card.Body>
                        </Card>
                        </div>
                    </div>
                    <div className='col-sm'>
                        <div style={{ width: '18rem' }}>            <Card>
                            <Card.Img variant="top" src={post6} style={{ height: '19rem',width:'18rem' }} className="opacity"/>
                            <Card.Body className='card-body1'>
                                <Card.Title className='card-title' style={{color:'white'}}><h4><b>Munnar</b></h4></Card.Title>
                               
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

export default Blog;