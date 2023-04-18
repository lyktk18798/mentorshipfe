import React, { useState } from "react";
import animalList from "../../data";

const List = () => {
  const [isClicked, checkIsClicked] = useState(false);
  const handleClick = () => checkIsClicked(!isClicked);

  return (
    <div>
      <ul className="list-group list-group-flush">
        {animalList
          ? isClicked
            ? animalList.map((item) => (
                <li className="list-group-item" key={item.id}>
                  <div className="d-flex">
                    <div className="p-2">
                      <img className="animal-img" src={item.src} />
                    </div>
                    <div className="p-2">
                      <h3>{item.name}</h3>
                      <p>{item.age}</p>
                    </div>
                  </div>
                </li>
              ))
            : animalList.slice(0, 5).map((item) => (
                <li className="list-group-item" key={item.id}>
                  <div className="d-flex">
                    <div className="p-2">
                      <img className="animal-img" src={item.src} />
                    </div>
                    <div className="p-2">
                      <h3>{item.name}</h3>
                      <p>{item.age}</p>
                    </div>
                  </div>
                </li>
              ))
          : null}
      </ul>
      <div className="btn-wrap text-center">
        <button type="button" className="btn btn-danger" onClick={handleClick}>
          {isClicked ? "Show less" : "Show more"}
        </button>
      </div>
    </div>
  );
};

export default List;
