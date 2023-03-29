import React from "react";

const Contact = (props) => {
  return (
    <div className="detail-contact">
      <div className="detail-contact-body">
        <p className="detail-contact-type">{props.type}</p>
        <p className="detail-contact-description">{props.description}</p>
      </div>
      <button className="detail-contact-btn">
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
};

export default Contact;
