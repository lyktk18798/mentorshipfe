import React from "react";

const Item = (porps) => {
  return (
    <div className="item">
      <img className="img" src={porps.img} alt="" />
      <div className="info">
        <h3 className="name">{porps.name}</h3>
        <p className="age">{porps.age}</p>
      </div>
    </div>
  );
};

export default Item;
