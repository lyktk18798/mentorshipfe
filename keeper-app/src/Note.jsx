import React from "react";
import notes from "./notes";

const Note = () => {
  return notes
    ? notes.map((item) => {
        return (
          <div class="note">
            <h1>{item.title}</h1>
            <p>{item.content}</p>
          </div>
        );
      })
    : null;
};

export default Note;
