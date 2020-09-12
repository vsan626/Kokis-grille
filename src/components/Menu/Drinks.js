import React from 'react';
import drinksData from '../../MenuData/drinksData.json';
import styled from 'styled-components';

const H4 = styled.h4 `
  margin: auto;
`

export default function Drinks() {
  return (
    <>
      {drinksData.map((data, key) => (
        <div key={key} className="col-md-6 all drinks">
          <div className="single-menu">
            <div className="title-wrap d-flex justify-content-between">
              <H4>{data.name}</H4>
              <h4 className="price">{data.price ? `$${data.price.toFixed(2)}` : null}</h4>
            </div>
              {data.drinkType ? <p><b>{data.drinkType}</b></p> : null}
              {data.description ? <p>{data.description}</p> : null}
              {data.description1 ? <p>{data.description1}</p> : null}
              {data.description2 ? <p>{data.description2}</p> : null}
              {data.description3 ? <p>{data.description3}</p> : null}
              {data.description4 ? <p>{data.description4}</p> : null}
              {data.description5 ? <p>{data.description5}</p> : null}
              {data.description6 ? <p>{data.description6}</p> : null}
              {data.description7 ? <p>{data.description7}</p> : null}
              {data.description8 ? <p>{data.description8}</p> : null}
              {data.description9 ? <p>{data.description9}</p> : null}
              {data.description10 ? <p>{data.description10}</p> : null}
          </div>
        </div>
      ))}
    </>
  );
}
