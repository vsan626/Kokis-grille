import React from 'react';
import kidsData from '../../MenuData/kidsData.json';

export default function Kids() {
  return (
    <>
      {kidsData.map((data, key) => (
        <div key={key} className="col-md-6 all kids">
          <div className="single-menu">
            <div className="title-wrap d-flex justify-content-between">
              <h4>{data.name}</h4>
              <h4 className="price">${data.price.toFixed(2)}</h4>
            </div>
            {data.warning ? (
              <p>
                <b>{data.warning}</b>
              </p>
            ) : null}
            <p>
              <b>{data.menuType}</b>
            </p>
            {data.description ? <p>{data.description}</p> : null}
          </div>
        </div>
      ))}
    </>
  );
}
