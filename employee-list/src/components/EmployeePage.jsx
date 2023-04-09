import Contact from "../contact";

import React from "react";

function EmployeePage(item) {

  const employee = Contact.slice(0,1).map((item) => (
    <li key={item.id}>
     <div>
    <h3 className="text-center">Employee</h3>
    <div className="card m-4">
      <ul className="list-group list-group-flush">
        <li className="list-group-item d-flex ">
          <img
            src={item.img}
            className="avatar"
          />
          <div className="mx-3 my-auto">
            <h4>{item.name}</h4>
            <span>{item.description}</span>
          </div>
        </li>
        <li className="list-group-item">
          <h5>Call office</h5>
          <span>{item.office}</span>
        </li>
        <li className="list-group-item">
          <h5>Call Mobile</h5>
          <span>{item.mobile}</span>
        </li>
        <li className="list-group-item">
          <h5>SMS</h5>
          <span>{item.email}</span>
        </li>
      </ul>
    </div>
  </div>
    </li>
  ));
  return employee;
}

export default EmployeePage;
