import React from 'react';
import drinksData from '../../MenuData/drinksData.json';

export default function Drinks() {
  return (
    <>
      {drinksData.map((data, key) => (
        <div key={key} className="col-md-6 all drinks">
          <div className="single-menu">
            <div className="title-wrap d-flex justify-content-between">
              <h4>{data.name}</h4>
              <h4 className="price">${data.price.toFixed(2)}</h4>
            </div>
              {data.drinkType ? <p><b>{data.drinkType}</b></p> : null}
              {data.description ? <p>{data.description}</p> : null}
          </div>
        </div>
      ))}
    </>
  );
}
