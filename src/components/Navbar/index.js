import { React, useState } from 'react'
import { Link } from 'react-router-dom';
import "./navbar.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
    const [icon, setIcon] = useState(false)
    // const handleClick = () => {
    //     setIcon(!icon)
    // }
    const closeSideDrawer = () => {
        setIcon(false)
    }
    return (
        <div className='wrapper'>

            <nav className='navbar fixed-top py-0 bg-black shadow-lg'>
                <Link to='/' className='nav-logo' onClick={closeSideDrawer} style={{ textDecoration: 'none' }}>Amigosgit </Link>
                {/* <div className='menu-icon' onClick={handleClick}>
                    {
                        icon ? <FaTimes className='fa-times'></FaTimes> :
                            <FaBars className='fa-bars'></FaBars>
                    }
                </div> */}
                <ul className={
                    icon ? 'nav-menu active' : 'nav-menu'
                }>
                    <li>
                        <Link to='/home' className='nav-links' onClick={closeSideDrawer} style={{ textDecoration: 'none' }}>Home</Link>
                    </li>

                    <li>
                        <Link to='/about' className='nav-links' onClick={closeSideDrawer} style={{ textDecoration: 'none' }}>About</Link>
                    </li>
                    <li>
                        <Link to='/property' className='nav-links' onClick={closeSideDrawer} style={{ textDecoration: 'none' }}>Property</Link>
                    </li>
                    <li>
                        <Link to='/blog' className='nav-links' onClick={closeSideDrawer} style={{ textDecoration: 'none' }}>Blog</Link>
                    </li>
                    <li>
                        <Link to='/contact' className='nav-links' onClick={closeSideDrawer} style={{ textDecoration: 'none' }}>Contact</Link>
                    </li>
                    <li>
                        <Link to='/s' className='nav-links' onClick={closeSideDrawer} style={{ textDecoration: 'none' }}>Sign in</Link>
                    </li>
                    <li>
                    <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-primary">Search</Button>
          </Form>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;