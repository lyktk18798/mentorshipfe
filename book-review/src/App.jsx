import React, { useState } from "react";
import Navbar from "./component/Navbar";
import Content from "./component/Content";
import BOOKLIST from "../BookList.js";

const App = () => {
  const [filterItems, setFilterItems] = useState("");
  return (
    <>
      <Navbar filterItems={filterItems} onFilterItemsChange={setFilterItems} />
      <Content bookList={BOOKLIST} filterItems={filterItems} />
    </>
  );
};

export default App;
