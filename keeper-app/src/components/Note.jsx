import React, { useState } from "react";

const Note = (props) => {
  const [note, setNote] = useState({ id: null, title: "", content: "" });
  const [list, setList] = useState([]);
  const handleInput = (e) => {
    const { value, name } = e.target;
    setNote((note) => ({ ...note, [name]: value, id: list.length }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newList = [...list, note];
    setList(newList);
    setNote({ id: null, title: "", content: "" });
  };

  const handleDelete = (e) => {
    const index = +e.target.parentElement.dataset.id;
    const newList = list.filter((item) => item.id !== index);
    setList(newList);
  };
  return (
    <div className="note">
      <div className="note-form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={note.title}
            onChange={handleInput}
          />
          <textarea
            type="text"
            placeholder="Take a note"
            name="content"
            value={note.content}
            onChange={handleInput}
          />
          <button className="add" type="submit">
            Add
          </button>
        </form>
      </div>
      <div className="list">
        {list.map((item, index) => (
          <div className="item" key={index} data-id={item.id}>
            <h1>{item.title}</h1>
            <p>{item.content}</p>
            <button className="delete" onClick={handleDelete}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Note;
