import React from 'react';

export default function Birthday() {
  return (
    // {/* <!-- Start home-about Area --> */}
    <section className="home-about-area section-gap">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 home-about-left">
            <h1>Special Birthday Ceremony</h1>
            <p>
            $4.95
              <br />
              Let us enhance your special evening with our Koki’s style
              celebration. A photograph capturing your joyous spirit is
              accompanied with a sublime dessert, and a $20 gift certificate to
              be used on your next visit.
              <br />
              Gift certificates of $25 & $50 are available.
            </p>
          </div>
          <div className="col-lg-6 home-about-right">
            <img className="img-fluid" src="img/birthday-bg.png" alt="" />
          </div>
        </div>
      </div>
    </section>
    // {/* <!-- End home-about Area -->			 */}
  );
}

