import React from "react";
function Card(props) {
  return (
    <div className="empItem">
      <div className="d-flex mt-3">
        <img
          src={props.src}
          className="avatar"
        />
        <div className="mx-3 my-auto">
          <h4>{props.name}</h4>
          <span>{props.des}</span>
        </div>
      </div>
    </div>
  );
}


export default Card;
