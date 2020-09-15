import React from 'react';
import appetizerData from '../../MenuData/appetizerData.json';

export default function Appetizers() {
  return (
    <>
      {appetizerData.map((data, key) => (
        <div key={key} className="col-md-6 all appetizers">
          <div className="single-menu">
            <div className="title-wrap d-flex justify-content-between">
              <h4>{data.name}</h4>
              <h4 className="price">${data.price.toFixed(2)}</h4>
            </div>
            {data.description ? <p className="menu-description">{data.description}</p> : <p></p>}
          </div>
        </div>
      ))}
    </>
  );
}
