import React from 'react';
import Appetizers from '../Menu/Appetizers';
import Lunch from '../Menu/Lunch';
import Dessert from '../Menu/Dessert';
import Dinner from '../Menu/Dinner';
import Kids from '../Menu/Kids';
import Drinks from '../Menu/Drinks';

export default function Menu({ menuRef }) {
  return (
    // {/* <!-- Start menu-area Area --> */}
    <section className="menu-area section-gap" id="menu" ref={menuRef}>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="menu-content pb-70 col-lg-8">
            <div className="title text-center">
              <h1 className="mb-10">Our chefs are here for you!</h1>
              {/* <p>Who are in extremely love with eco friendly system.</p> */}
            </div>
          </div>
        </div>

        <ul className="filter-wrap filters col-lg-12 no-padding">
          <li className="active" data-filter="*">
            All Menu
          </li>
          <li data-filter=".appetizers">Appetizers</li>
          <li data-filter=".lunch">Lunch</li>
          <li data-filter=".dinner">Dinner</li>
          <li data-filter=".kids">Kids</li>
          <li data-filter=".dessert">Dessert</li>
          <li data-filter=".drinks">Drinks</li>
        </ul>

        <div className="filters-content">
          <div className="row grid">
            <Dinner />
            <Dessert />
            <Kids />
            <Lunch />
            <Appetizers />
            <Drinks />
          </div>
        </div>
      </div>
    </section>
    // {/* <!-- End menu-area Area --> */}
  );
}
