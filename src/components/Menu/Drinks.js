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
              <H4 >{data.name}</H4>
              <h4 className="price">{data.price ? `$${data.price.toFixed(2)}` : null}</h4>
            </div>
              {data.drinkType ? <p className="menu-description"><b>{data.drinkType}</b></p> : null}
              {data.description ? <p className="menu-description">{data.description}</p> : null}
              {data.description1 ? <p className="menu-description">{data.description1}</p> : null}
              {data.description2 ? <p className="menu-description">{data.description2}</p> : null}
              {data.description3 ? <p className="menu-description">{data.description3}</p> : null}
              {data.description4 ? <p className="menu-description">{data.description4}</p> : null}
              {data.description5 ? <p className="menu-description">{data.description5}</p> : null}
              {data.description6 ? <p className="menu-description">{data.description6}</p> : null}
              {data.description7 ? <p className="menu-description">{data.description7}</p> : null}
              {data.description8 ? <p className="menu-description">{data.description8}</p> : null}
              {data.description9 ? <p className="menu-description">{data.description9}</p> : null}
              {data.description10 ? <p className="menu-description">{data.description10}</p> : null}
          </div>
        </div>
      ))}
    </>
  );
}
