import React from 'react';
import { NavLink } from "react-router-dom";


export default function About() {
  return (
    // {/* <!-- Start home-about Area --> */}
    <section className="home-about-area section-gap">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 home-about-left">
            <h1>KOKI'S STORY</h1>
            <p>
              Koki’s Teppanyaki Grille originally opened for business in October
              1997 with nine tables at current location in Tustin, California.
              Within 9 months of operating word quickly began to travel to
              residents of Tustin, Irvine, Santa Ana and Orange that a local
              Teppanyaki House was more than worth the drive.
            </p>
            <NavLink to="/About">
            <button className="primary-btn">
              More About Us
            </button>

            </NavLink>
          </div>
          <div className="col-lg-6 home-about-right">
            <img className="img-fluid" src="img/about-img.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
    // {/* <!-- End home-about Area -->			 */}
  );
}
