import React, {Component} from 'react';
import Header from '../components/Header'
export default class AboutUs extends Component {
  render() { 
    return (  
      
      <div id="header-top">
      <section class="about-banner relative">
      <div class="overlay overlay-bg"></div>
      <div class="container">				
        <div class="row d-flex align-items-center justify-content-center">
          <div class="about-content col-lg-12">
            <h1 class="text-white">
              About Us				
            </h1>	
            <p class="text-white link-nav"><a href="index.html">Home </a>  <span class="lnr lnr-arrow-right"></span>  <a href="about.html"> About Us</a></p>
          </div>	
        </div>
      </div>
    </section>
      			{/* // <!-- Start home-about Area --> */}
			<section class="home-about-area section-gap">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 home-about-left">
            <h1>About Our Story</h1>
            <p>
              Who are in extremely love with eco friendly system. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <a href="#" class="primary-btn">view full menu</a>
          </div>
          <div class="col-lg-6 home-about-right">
            <img class="img-fluid" src="img/about-img.jpg" alt="" />
          </div>
        </div>
      </div>	
    </section>
    {/* <!-- End home-about Area --> */}
    </div>
    );
  }
}