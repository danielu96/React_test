import React from 'react';
import {BrowserRouter,Routes, Route, Link} from 'react-router-dom';
 import Info from '../das';
 import Start from './start.js';
import Home from './home';




const Header =() => {
    return (
        <React.Fragment>
        <BrowserRouter>
        <div className='moja'>
    <header>
      <nav>
            <ul>
            <li>  <Link to = "/">Home </Link> </li>
              <li>  <Link to = "/start">Start </Link> </li>
              <li>  <Link to =   "/das">Info </Link>  </li>
            </ul>
        </nav>
        </header>
        <section>
            <Routes>
            <Route path = "/" element ={<Home/>}/>
            <Route path = "/start" element ={<Start/>}/>
            <Route path = "/das" element ={<Info/>}/>
            </Routes>
             
        </section>
        </div>
        </BrowserRouter>
        </React.Fragment>
        ) 
}
export default Header;
