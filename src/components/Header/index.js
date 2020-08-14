import React from 'react';
import './style.scss';
import 'font-awesome/css/font-awesome.min.css';


const HeaderComponent = (props) => {
  return  (
    <header className="site-header">
      <div className="container" >
        <div className="row align-items-center position-relative">
          <div className="col-3">
            <div className="site-logo">
              <a href="#" className="font-weight-bold">Neil Pham</a>
            </div>
          </div>
          <div className="col-9 text-right">
            <span className="d-inline-block d-lg-none">
              <a href="#" className="site-menu-toggle js-menu-toggle py-5">
                <span className="fa fa-bars h3"> </span>
              </a>
            </span>
            
            <nav className="site-navigation text-right ml-auto d-none d-lg-block" role="navigation">
              <MenuItemsComponent /> 
            </nav>
          </div>
        </div>
      </div> 
    </header>
  )
}

const MenuItemsComponent = () =>{
  return (
    <ul className="site-menu main-menu js-clone-nav ml-auto ">
      <li><a href="index.html" className="nav-link">Home</a></li>
      <li><a href="portfolio.html" className="nav-link">Portfolio</a></li>
      <li><a href="about.html" className="nav-link">About</a></li>
      <li><a href="services.html" className="nav-link">Services</a></li>
      <li><a href="blog.html" className="nav-link">Blog</a></li>
      <li><a href="contact.html" className="nav-link">Contact</a></li>
    </ul>
  )
}
export default HeaderComponent;