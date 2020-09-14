import React from 'react';

export default function Footer() {
  return (
    // {/* <!-- start footer Area -->		 */}
    <footer className="footer-area">
      <div className="footer-widget-wrap">
        <div className="container">
          <div className="row section-gap">
            <div className="col-lg-4  col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h4>Opening Hours</h4>
                <ul className="hr-list">
                  <p>Lunch</p>
                  <li className="d-flex justify-content-between">
                    <span>Monday - Friday</span> <span>11:30 am - 2:30 pm</span>
                  </li>
                  <p>Dinner</p>
                  <li className="d-flex justify-content-between">
                    <span>Monday - Thursday</span>{' '}
                    <span>05.00 pm - 9.30 pm</span>
                  </li>
                  <li className="d-flex justify-content-between">
                    <span>Friday</span> <span>05.00 pm - 10.00 pm</span>
                  </li>
                  <li className="d-flex justify-content-between">
                    <span>Saturday</span> <span>04.30 pm - 10.00 pm</span>
                  </li>
                  <li className="d-flex justify-content-between">
                    <span>Sunday</span> <span>04.30 pm - 9.30 pm</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4  col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h4>Contact Us</h4>
                <p className="number">Phone: 714-505-6738</p>
                <p className="number">Fax: 714-505-3283</p>
                <p className="number">
                  Email: <a href="ko@kokisgrille.com">ko@kokisgrille.com</a>
                </p>
              </div>
            </div>
            <div className="col-lg-4  col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h4>Visit Our Restuarant</h4>
                <p>
                  Koki’s Teppanyaki Grille
                  <br />
                  1061 East Main Street, Tustin, Ca 92780
                </p>
                <div className="d-flex flex-row" id="mc_embed_signup">
                  <a href="https://maps.google.com/maps?q=Koki%27s+Teppan+House,+East+Main+Street,+Tustin,+CA&hl=en&ll=33.742256,-117.816739&spn=0.013971,0.023947&sll=37.269174,-119.306607&sspn=13.676694,24.521484&oq=kokis+&hq=Koki%27s+Teppan+House,&hnear=E+Main+St,+Tustin,+California+92780&t=m&z=16&iwloc=A">
                    <img
                      src="http://www.kokisgrille.com/wp-content/uploads/2012/08/map.png"
                      alt="Map of location"
                    ></img>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom-wrap">
        <div className="container">
          <div className="row footer-bottom d-flex justify-content-between align-items-center">
            <p className="col-lg-8 col-mdcol-sm-6 -6 footer-text m-0">
              {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
              Danny San© 2020. All rights reserved.
              {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
            </p>
            <ul className="col-lg-4 col-mdcol-sm-6 -6 social-icons text-right">
              <li>
                <a href="https://www.facebook.com/Kokisteppanyakigrille">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="http://www.yelp.com/biz/kokis-japanese-teppan-house-tustin">
                  <i className="fa fa-yelp"></i>
                </a>
              </li>
              <li>
                <a href="https://instagram.com/kokis_teppanyaki">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
