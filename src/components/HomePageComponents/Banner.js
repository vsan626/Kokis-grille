import React from 'react';

export default function Banner({ handleScrollToMenu }) {
  return (
    // {/* <!-- Start banner Area --> */}
    <section class="banner-area relative">
      <div class="overlay overlay-bg"></div>
      <div class="container">
        <div class="row d-flex align-items-center justify-content-center">
          <div class="main-banner-content col-lg-12">
            <h6 className="text-white">Delicious</h6>
            <h1 className="text-white">Teppanyaki Cuisine</h1>
            <p className="banner-text text-white">
              Derived from the Japanese language and translates to the grilling
              of steak, chicken and seafood on an iron plate. Come enjoy the
              best Teppanyaki Orange County and the City of Tustin has to offer.
            </p>
            <button
              className="primary-btn text-uppercase"
              onClick={handleScrollToMenu}
            >
              Check Our Menu
            </button>{' '}
          </div>
        </div>
      </div>
    </section>
    // {/* <!-- End banner Area --> */}
  );
}
