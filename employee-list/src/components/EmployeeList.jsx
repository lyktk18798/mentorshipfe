import React from "react";
import Card from "./EmployeeListItem";
import Contact from "../contact";
function EmployeeList(item) {
  const list = Contact.map((item) => (
    <Card
      key={item.id}
      id={item.id}
      name={item.name}
      des={item.description}
      src={item.img}
    />
  ));
  return list;
}

export default EmployeeList;
