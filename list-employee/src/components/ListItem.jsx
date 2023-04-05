import React from "react";
import employeeList from "../mockdata";
const ListItem = (props) => {
  return (
    <div className="listWrapper col-6">
      <h1 className="header-title">Employee Directory</h1>
      <div className="search">
        <span>Search</span>
        <input type="text" onChange={props.handleSearch} value={props.name} />
      </div>
      {employeeList
        .filter((item) =>
          item.name.toLowerCase().includes(props.name.toLowerCase())
        )
        .map((item) => {
          return (
            <div className="item" data-id={item.id} key={item.id}>
              <div className="item-avatar">
                <img
                  src={item.img}
                  alt=""
                  onClick={() => props.handleGetId(item.id)}
                />
              </div>
              <div className="item-info">
                <h3 className="item-name">{item.name}</h3>
                <p className="item-description">{item.description}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};
export default ListItem;
