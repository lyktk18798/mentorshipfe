import React from "react";
import emojipedia from "../emojipedia";

const Card = () => {
  return emojipedia
    ? emojipedia.map((item) => {
        return (
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
      })
    : null;
};

export default Card;
