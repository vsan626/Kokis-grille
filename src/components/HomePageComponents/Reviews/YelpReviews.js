import React, { useState, useEffect } from 'react';
import axios from 'axios';
const yelpApiKey = process.env.REACT_APP_YELP_API;

export default function YelpReviews() {
  const [reviews, setReviews] = useState([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps

  const fetchYelpData = async () => {
    try {
      const reviewData = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/kokis-teppanyaki-grille-tustin/reviews`,
        {
          headers: {
            Authorization: `Bearer ${yelpApiKey}`
          }
        }
      );
      setReviews(reviewData.data.reviews);
    } catch (error) {
      console.error('error with axios get', error);
    }
  };

  useEffect(() => {
    // async function fetchYelpData () {
    //   try {
    //     const reviewData = await axios.get(
    //       `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/kokis-teppanyaki-grille-tustin/reviews`,
    //       {
    //         headers: {
    //           Authorization: `Bearer ${yelpApiKey}`
    //         }
    //       }
    //     );
    //     setReviews(reviewData.data.reviews);
    //   } catch (error) {
    //     console.error('error with axios get', error);
    //   }
    // }
    fetchYelpData();
  }, []);

  const reviewsRating = (num) => {
    //#region star render based on yelp api rating
    if (num === 5) {
      return (
        <div className="star">
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
        </div>
      );
    } else if (num === 4) {
      return (
        <div className="star">
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star"></span>
        </div>
      );
    } else if (num === 3) {
      return (
        <div className="star">
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
        </div>
      );
    } else if (num === 2) {
      return (
        <div className="star">
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
        </div>
      );
    } else if (num === 1) {
      return (
        <div className="star">
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
        </div>
      );
    } else {
      return null;
    }
    //#endregion
  };

  if (reviews.length > 0) {
    return (
      <>
        {reviews.map((review, key) => {
          return (
            <div key={key} className="single-review">
              <img src={review.user.image_url} alt="" />
              <h4>{review.user.name}</h4>
              {reviewsRating(review.rating)}
              <p>{review.text}</p>
            </div>
          );
        })}
      </>
    );
  } else {
    return null;
  }
}
