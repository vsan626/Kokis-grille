import React from 'react';
import YelpReviews from '../HomePageComponents/Reviews/YelpReviews';

export default function Reviews() {
  return (
    // {/* <!-- Start review Area --> */}
    <section className="review-area section-gap">
      <div className="container">
        <div className="row">
          <div className="active-review-carusel">
            <YelpReviews />
          </div>
        </div>
      </div>
    </section>
    // {/* <!-- End review Area -->					 */}
  );
}
