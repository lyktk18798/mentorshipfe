import React from "react";
import Card from "./Card";

const App = () => {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        <Card />
      </dl>
    </div>
  );
};

export default App;
