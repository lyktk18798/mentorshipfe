import React, { useState } from "react";
import "./styles.css";
import ListItem from "./components/ListItem";
import Employee from "./components/Employee";

const App = () => {
  const [name, setName] = useState("");
  const [userId, setUserId] = useState(null);
  const handleSearch = (e) => {
    setName(e.target.value);
  };
  const handleGetId = (id) => {
    setUserId(id);
  };

  return (
    <div className="app row">
      <ListItem
        handleSearch={handleSearch}
        handleGetId={handleGetId}
        name={name}
      />
      <Employee userId={userId} />
    </div>
  );
};

export default App;
