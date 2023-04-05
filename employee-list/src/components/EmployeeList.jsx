import React from "react";
import Contact from "../contact";

function EmployeeList(item) {
  const list = Contact.map((item) => (
    <li key={item.id}>
      <div>
        <div className="d-flex mt-3">
          <img src={item.img} className="avatar" />
          <div className="mx-3 my-auto">
            <h4>{item.name}</h4>
            <span>{item.description}</span>
          </div>
        </div>
      </div>
    </li>
  ));
  return list;
}

export default EmployeeList;
