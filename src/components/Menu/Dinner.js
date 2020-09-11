import React from 'react';
import dinnerData from '../../MenuData/dinnerData.json';

export default function Dinner() {
  return (
    <>
      {dinnerData.map((data, key) => {
        let choicesArray;
        let ChoicesElement;
        if (data.choices) {
          choicesArray = data.choices.split(',');
          ChoicesElement = choicesArray.map((choices, key) => (
            <p key={key}>{choices}</p>
          ));
        }
        return (
          <div key={key} className="col-md-6 all dinner">
            <div className="single-menu">
              <div className="title-wrap d-flex justify-content-between">
                <h4>{data.name}</h4>
                <h4 className="price">${data.price.toFixed(2)}</h4>
              </div>
              <p>
                <b>{data.menuType}</b>
              </p>
              {data.description ? (
                <p>
                  <i>{data.description}</i>
                </p>
              ) : null}
              {data.description1 ? <p>{data.description1}</p> : null}
              {data.additionalDesc ? (
                <p>
                  <b>{data.additionalDesc}</b>
                </p>
              ) : null}
              {data.warning ? (
                <p>
                  <b>{data.warning}</b>
                </p>
              ) : null}
              {data.choices ? ChoicesElement : null}
            </div>
          </div>
        );
      })}
    </>
  );
}
