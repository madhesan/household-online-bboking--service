import React from 'react';
import {Routes,Route} from "react-router-dom";
import Property1 from './Booking/Property1/property1';
import Navbar from './components/Navbar';
import About from './Pages/About/about';
import Blog from './Pages/Blog/blog';
import Contact from './Pages/Contact/Contact';

import Homepage from './Pages/Home';
import Property from './Pages/Property/property';
const App = () => {
  return (
    <>
    <Navbar/>
    <main className='pt-5'>
      <Routes>
        {/* <Route path='/' exact element={<Navbar/>}/> */}
        <Route path='/' exact element={<Homepage/>}/>
        <Route path='/home' exact element={<Homepage/>}/>
        <Route path='/property' exact element={<Property/>}/>
        <Route path='/about' exact element={<About/>}/>
        <Route path='/blog' exact element={<Blog/>}/>
        <Route path='/property1' exact element={<Property1/>}/>
        <Route path='/contact' exact element={<Contact/>}/>
      </Routes> 
    </main>
    </>
  );
};

export default App;