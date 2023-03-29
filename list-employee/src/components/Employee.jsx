import React from "react";
import employeeList from "../mockdata";
import Contact from "./Contact";

const Employee = (props) => {
  return (
    <div className="itemWrapper col-6">
      <h1 className="header-title">Employee Information</h1>
      {props.userId ? (
        employeeList
          .filter((item) => item.id === props.userId)
          .map((item) => (
            <div className="employee-detail" key={item.id}>
              <div className="detail-header">
                <div className="detail-avatar">
                  <img alt="" src={item.img} />
                </div>
                <div className="detail-info">
                  <h3 className="detail-name">{item.name}</h3>
                  <p className="detail-description">{item.description}</p>
                </div>
              </div>
              <div className="detail-body">
                <Contact type="Call Office" description={item.office} />
                <Contact type="Call Mobile" description={item.mobile} />
                <Contact type="SMS" description={item.sms} />
                <Contact type="Email" description={item.email} />
              </div>
            </div>
          ))
      ) : (
        <>
          <div className="employee-detail">
            <div className="detail-header">
              <div className="detail-avatar">
                <img
                  alt=""
                  src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                />
              </div>
              <div className="detail-info">
                <h3 className="detail-name">Name</h3>
                <p className="detail-description">Description</p>
              </div>
            </div>
            <div className="detail-body">
              <Contact type="Call Office" />
              <Contact type="Call Mobile" />
              <Contact type="SMS" />
              <Contact type="Email" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Employee;
