import React, { useState } from "react";
import Navbar from "./Navbar";
import Content from "./Content";
import bookList from "../../BookList";

const App = () => {
  const [data, setData] = useState(bookList);

  const findBookName = (title) => {
    console.log(title);
    if (Array.isArray(bookList) && bookList.length > 0) {
      setData(
        bookList.filter((item) => item.name.toLowerCase().includes(title))
      );
    }
  };
  return (
    <div>
      <Navbar searchList={findBookName} />
      <Content bookList={data} />
    </div>
  );
};

export default App;
