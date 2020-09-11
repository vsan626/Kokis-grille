import React from 'react';
import dessertData from '../../MenuData/dessertData.json';

export default function Dessert() {
  return (
    <>
      {dessertData.map((data, key) => (
        <div key={key} className="col-md-6 all dessert">
          <div className="single-menu">
            <div className="title-wrap d-flex justify-content-between">
              <h4>{data.name}</h4>
              <h4 className="price">${data.price.toFixed(2)}</h4>
            </div>
              {data.description ? <p>{data.description}</p> : null}
          </div>
        </div>
      ))}
    </>
  );
}
