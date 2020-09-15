import React from 'react';
import YelpReviews from '../HomePageComponents/Reviews/YelpReviews'

export default function Reviews() {
  return (
    // {/* <!-- Start review Area --> */}
    <section className="review-area section-gap">
      <div className="container">
        <div className="row">
          <div className="active-review-carusel">
          <YelpReviews />
            <div className="single-review">
              <img src="img/user.png" alt="" />
              <h4>Hulda Sutton</h4>
              <div className="star">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
              </div>
              <p>
                “Accessories Here you can find the best computer accessory for
                your laptop, monitor, printer, scanner, speaker. Here you can
                find the best computer accessory for your laptop, monitor,
                printer, scanner, speaker.”
              </p>
            </div>
            <div className="single-review">
              <img src="img/user.png" alt="" />
              <h4>Hulda Sutton</h4>
              <div className="star">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
              </div>
              <p>
                “Accessories Here you can find the best computer accessory for
                your laptop, monitor, printer, scanner, speaker. Here you can
                find the best computer accessory for your laptop, monitor,
                printer, scanner, speaker.”
              </p>
            </div>
            <div className="single-review">
              <img src="img/user.png" alt="" />
              <h4>Hulda Sutton</h4>
              <div className="star">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
              </div>
              <p>
                “Accessories Here you can find the best computer accessory for
                your laptop, monitor, printer, scanner, speaker. Here you can
                find the best computer accessory for your laptop, monitor,
                printer, scanner, speaker.”
              </p>
            </div>
            <div className="single-review">
              <img src="img/user.png" alt="" />
              <h4>Hulda Sutton</h4>
              <div className="star">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
              </div>
              <p>
                “Accessories Here you can find the best computer accessory for
                your laptop, monitor, printer, scanner, speaker. Here you can
                find the best computer accessory for your laptop, monitor,
                printer, scanner, speaker.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    // {/* <!-- End review Area -->					 */}
  );
}
