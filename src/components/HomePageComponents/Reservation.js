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
              Reserve Your Seats by making a reservation
            </h1>
            <br />
            {/* make button open modal to yelp reservation page */}
            <a href="https://www.yelp.com/reservations/kokis-teppanyaki-grille-tustin">
              <button className="primary-btn">Make Reservation</button>
            </a>
          </div>
        </div>
      </div>
    </section>
    // {/* <!-- End reservation Area --> */}
  );
}
