import React from 'react';
import './footer.css';
import styled from 'styled-components';
const Footer = () => {
    return (
        <div className='main-footer'>
            <div className='footer-middle'>
                <div className='container'>
                    <div className='row gy-6 my-4'>
                        <div className='col-3'>
                            <ul className='list-unstyled'>
                                <h3>Amigos-Household</h3>
                                <p>
                                   amigos-households, a leading property site to sale/rent your property, brings you the quickest and most convenient way for displaying your property advertisement and connecting with prospective buyers.
                                </p>
                                <p>Phone .+91 9090878733
                                    Email . amigos-households@gmail.com</p>
                            </ul>
                        </div>
<p className='para'>............................................................</p>
                        <div className='col' >
                            <ul className='list-unstyled'>
                                <h3>The Company</h3>
                                <li>Site map</li>
                                <li>Agent admin</li>
                                <li>Careers</li>
                                <li>Privacy policy</li>
                            </ul>
                        </div>
                        <div className='col'>
                            <ul className='list-unstyled'>
                                <h3>Our Areas</h3>
                                <li>Chennai</li>
                                <li>Coimbatore</li>
                                <li>Erode</li>
                                <li>Salem</li>
                            </ul>
                        </div>


                    </div>
                    <div className='footer-bottom'>
                        <p className='text-xs-center'>
                            &copy;{new Date().getFullYear()} City Guide App - All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
