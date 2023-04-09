import React, { useState } from "react";
import birthdays from "../birthdays";
import Item from "./Item";

const List = () => {
  const [number, setNumber] = useState(1);
  const getAge = (year) => {
    const d = new Date(year);
    const current = new Date();
    return current.getFullYear() - d.getFullYear();
  };

  const handleBirthday = (year) => {
    const d = new Date(year);
    const current = new Date();
    const dMonth = d.getMonth();
    const dDate = d.getDate();
    const currentMonth = current.getMonth();
    const currentDate = current.getDate();
    if (dMonth === currentMonth && dDate === currentDate) {
      return true;
    }
    return false;
  };

  const handleNumber = () => {
    setNumber((number) => (number += 1));
  };

  return (
    <div className="app">
      <h1 className="title">Birthdays Today</h1>
      <div className="list">
        {birthdays
          .filter((item) => handleBirthday(item.birthday))
          .slice(0, number)
          .map((item) => (
            <Item
              key={item.id}
              img={item.avt}
              name={item.name}
              age={getAge(item.birthday) + " years"}
            />
          ))}
      </div>
      <button onClick={handleNumber}>Load More</button>
    </div>
  );
};

export default List;
