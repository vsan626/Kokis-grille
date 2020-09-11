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
                  <li className="d-flex justify-content-between">
                    <span>Monday - Friday</span>{' '}
                    <span>08.00 am - 10.00 pm</span>
                  </li>
                  <li className="d-flex justify-content-between">
                    <span>Saturday</span> <span>08.00 am - 10.00 pm</span>
                  </li>
                  <li className="d-flex justify-content-between">
                    <span>Sunday</span> <span>08.00 am - 10.00 pm</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4  col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h4>Contact Us</h4>
                <p>
                  56/8, los angeles, rochy beach, Santa monica, United states of
                  america - 1205
                </p>
                <p className="number">
                  012-6532-568-9746
                  <br />
                  012-6532-569-9748
                </p>
              </div>
            </div>
            <div className="col-lg-4  col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h4>Newsletter</h4>
                <p>
                  You can trust us. we only send promo offers, not a single
                  spam.
                </p>
                <div className="d-flex flex-row" id="mc_embed_signup">
                  <form
                    className="navbar-form"
                    action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                    method="get"
                  >
                    <div className="input-group add-on align-items-center d-flex">
                      <input
                        className="form-control"
                        name="EMAIL"
                        placeholder="Your Email address"
                        // onFocus="this.placeholder = ''"
                        // onBlur="this.placeholder = 'Your Email address'"
                        required=""
                        type="email"
                      />
                      <div style={{ position: 'absolute', left: '-5000px' }}>
                        <input
                          name="b_36c4fd991d266f23781ded980_aefe40901a"
                          tabIndex="-1"
                          // value=""
                          type="text"
                        />
                      </div>
                      <div className="input-group-btn">
                        <button className="genric-btn">
                          <span className="lnr lnr-arrow-right"></span>
                        </button>
                      </div>
                    </div>
                    <div className="info mt-20"></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom-wrap">
        <div className="container">
              <p>Customized by Danny San</p>
          <div className="row footer-bottom d-flex justify-content-between align-items-center">
            <p className="col-lg-8 col-mdcol-sm-6 -6 footer-text m-0">
              {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
              Copyright &copy;
              <script>document.write(new Date().getFullYear());</script> All
              rights reserved | This template is made with{' '}
              <i className="fa fa-heart-o" aria-hidden="true"></i> by{' '}
              <a href="https://colorlib.com" target="_blank">
                Colorlib
              </a>
              {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
            </p>
            <ul className="col-lg-4 col-mdcol-sm-6 -6 social-icons text-right">
              <li>
                <a href="#">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-dribbble"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-behance"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
