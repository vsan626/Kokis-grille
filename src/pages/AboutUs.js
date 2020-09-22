import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class AboutUs extends Component {
  render() {
    return (
      <div id="header-top">
        <section className="about-banner relative">
          <div className="overlay overlay-bg"></div>
          <div className="container">
            <div className="row d-flex align-items-center justify-content-center">
              <div className="about-content col-lg-12"></div>
            </div>
          </div>
        </section>
        {/* // <!-- Start home-about Area --> */}
        <section className="home-about-area section-gap">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 home-about-left">
                <h1>About Our Story</h1>
                <p>
                  Koki’s Teppanyaki Grille originally opened for business in
                  October 1997 with nine tables at current location in Tustin,
                  California. Within 9 months of operating word quickly began to
                  travel to residents of Tustin, Irvine, Santa Ana and Orange
                  that a local Teppanyaki House was more than worth the drive.
                </p>
                <p>
                  Rita Ko, the original and current proprietor of Koki’s
                  Teppanyaki Grille in Tustin lived in Hong Kong until her
                  teenage years, where she was exposed to a freewheeling world
                  of entrepreneurism. Her parents owned a small grocery store
                  and paved the road for Rita to learn about the essentials of
                  business, customer service and food preparation.
                </p>
                <p>
                  Before 2011, Koki’s was bought by a management team that led
                  to mediocrity in leadership, marketing and food preparation.
                  By the end of 2011, Rita Ko came back to fulfill the high
                  standards she had set and help bring the Orange County
                  communities that used to frequent her restaurant back for
                  good.
                </p>
                <p>
                  Rita Ko and Koki’s Teppanyaki Grille Tustin welcomes you to
                  the family-owned and operated restaurant – Banzai!
                </p>
                <NavLink to="/Menu">
                  <button className="primary-btn">view full menu</button>
                </NavLink>
              </div>
              <div className="col-lg-6 home-about-right">
                <img className="img-fluid" src="img/about-main.jpg" alt="" />
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End home-about Area --> */}
      </div>
    );
  }
}
