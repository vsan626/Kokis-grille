import React from 'react';

export default function Reservation() {
  return (
    // {/* <!-- Start reservation Area --> */}
    <section className="reservation-area section-gap relative align-items-center">
      <div className="overlay overlay-bg"></div>
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-6 reservation-center">
            <h1 className="text-white">
              Reserve Your Seats to Confirm if You Come with Your Family
            </h1>
            <p className="text-white pt-20">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam. Quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea.
            </p>
            {/* make button open modal to yelp reservation page */}
            <button className="primary-btn">Make Reservation</button>
          </div>
        </div>
      </div>
    </section>
    // {/* <!-- End reservation Area --> */}
  );
}
