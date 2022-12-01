import React from "react";
import './Card.scss';
import {Link} from "react-router-dom";

const Card = ({item}) => {
  return (
    <div className="card">
      {item.isNew+"a"}
      <div className="card-top">
        <Link to={`/product/${item.id}`}>
          <img src={item.img1} height={270} width={210} />
        </Link>
            {item.isNew==true?<div className="card-season">New Season</div>:null}
      </div>
      <div className="card-bottom">
        <div className="card-title">{item.title}</div>
        <div className="card-price">
          <div className="old-price">{"$" + item.oldPrice}</div>
          <div className="new-price">{"$" + item.newPrice}</div>
        </div>
      </div>
    </div>
  );
};  
export default Card;