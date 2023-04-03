import React from "react";
import emojipedia from "../emojipedia";
import Card from "./Card";

function createCard(item) {
  return (
    <Card
      key={item.id}
      emoji={item.emoji}
      meaning={item.meaning}
    />
  )
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map(item => createCard(item))}
      </dl>
    </div>
  );
}

export default App;
