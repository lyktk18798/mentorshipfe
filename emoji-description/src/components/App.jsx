import React from "react";
import emojipedia from "../emojipedia";

function App() {
  const mappingEmojipedia = (item) => (
    <div className="term" key={item.id}>
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {item.emoji}
        </span>
        <span>{item.name}</span>
      </dt>
      <dd>{item.meaning}</dd>
    </div>
  );
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map((item) => mappingEmojipedia(item))}
      </dl>
    </div>
  );
}

export default App;
