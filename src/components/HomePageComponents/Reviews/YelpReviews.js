import React, { useState, useEffect } from 'react';
import axios from 'axios';
axios.defaults.baseURL = 'https://api.yelp.com';
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";


export default function YelpReviews() {
  const [reviews, setReviews] = useState({});
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    async function fetchYelpData() {
      try {
        const reviewData = await axios.get(
          `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/kokis-teppanyaki-grille-tustin/reviews`,
          {
            headers: {
              Authorization: `Bearer ${process.env.YELP_API}`
            }
          }
        );
        setReviews(reviewData.data);
      } catch (error) {
        console.error('error with axios get', error);
      }
    }
    fetchYelpData();
  });
  return (
    <div className="single-review">
      {console.log('reviews state', reviews)}
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
        “Accessories Here you can find the best computer accessory for your
        laptop, monitor, printer, scanner, speaker. Here you can find the best
        computer accessory for your laptop, monitor, printer, scanner, speaker.”
      </p>
    </div>
  );
}
