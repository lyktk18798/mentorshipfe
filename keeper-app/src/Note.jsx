import React, { useState } from "react";

let id = 0;
const Note = () => {
  const [query, setQuery] = useState({
    title: "",
    content: "",
  });

  const handleChange = (evt) => {
    const value = evt.target.value;
    setQuery({
      ...query,
      [evt.target.name]: value,
    });
    console.log(query);
  };

  const [taskList, setTaskList] = useState([]);
  const addNote = () => {
    if (query.content || query.title) {
      setTaskList([
        ...taskList,
        { id: id++, title: query.title, content: query.content },
      ]);
      setQuery({
        title: "",
        content: "",
      });
    }
  };

  return (
    <>
      <div className="note">
        <input
          id="title"
          type="text"
          placeholder="Title"
          name="title"
          value={query.title}
          onChange={handleChange}
        />
        <textarea
          className="content"
          placeholder="Take a note"
          name="content"
          value={query.content}
          onChange={handleChange}
        ></textarea>
        <button onClick={addNote}>Add</button>
      </div>

      {taskList.map((item) => {
        return (
          <div className="note" key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.content}</p>
            <button
              onClick={() =>
                setTaskList(taskList.filter((a) => a.id !== item.id))
              }
            >
              Remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Note;

