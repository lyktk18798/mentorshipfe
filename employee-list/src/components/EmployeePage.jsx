import { HeaderItem } from "./Header";
import Contact from "../contact";

import React from "react";
function EmployeePage() {
  return (
    <div>
      <HeaderItem />
      <div className="card m-4">
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex ">
            <img
              src="https://s.abcnews.com/images/GMA/asap-rocky-gty-jt-190711_hpMain_1x1_992.jpg"
              className="avatar"
            />
            <div className="mx-3 my-auto">
              <h4>{Contact[4].name}</h4>
              <span>{Contact[4].description}</span>
            </div>
          </li>
          <li className="list-group-item">
            <h5>Call office</h5>
            <span>{Contact[4].office}</span>
          </li>
          <li className="list-group-item">
            <h5>Call Mobile</h5>
            <span>{Contact[4].mobile}</span>
          </li>
          <li className="list-group-item">
            <h5>SMS</h5>
            <span>{Contact[4].email}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default EmployeePage;
