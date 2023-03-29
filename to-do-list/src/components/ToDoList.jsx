import React, { useState } from "react";

const ToDoList = () => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [checkAll, setCheckAll] = useState(true);
  const [completed, setCompleted] = useState(0);
  const [percent, setPrecent] = useState(0);
  const [style, setStyle] = useState({});

  const handleSubmit = (e) => {
    if (input.length > 0) {
      setTasks((prev) => [...prev, input]);
      setInput("");
    }
    setPrecent(Math.floor((100 / (tasks.length + 1)) * completed));
    setStyle({
      width: `${Math.floor((100 / (tasks.length + 1)) * completed)}%`,
    });
  };

  const handleCancel = () => {
    setInput("");
  };

  const handleCheck = (e) => {
    if (e.target.checked) {
      setCompleted(completed + 1);
      setPrecent(Math.floor((100 / tasks.length) * (completed + 1)));
      setStyle({
        width: `${Math.floor((100 / tasks.length) * (completed + 1))}%`,
      });
    } else {
      setCompleted(completed - 1);
      setPrecent(Math.floor((100 / tasks.length) * (completed - 1)));
      setStyle({
        width: `${Math.floor((100 / tasks.length) * (completed - 1))}%`,
      });
    }
  };

  const handleCheckAll = () => {
    const allTasks = document.querySelectorAll(".pending");
    setCheckAll((checkAll) => !checkAll);
    if (checkAll) {
      allTasks.forEach((e) => {
        e.checked = true;
        setCompleted(tasks.length);
        setPrecent(100);
        setStyle({ width: "100%" });
      });
    } else {
      allTasks.forEach((e) => {
        e.checked = false;
        setCompleted(0);
        setPrecent(0);
        setStyle({});
      });
    }
  };

  const handleDeleteAll = () => {
    setTasks([]);
    setStyle({});
    setCompleted(0);
    setPrecent(0);
    setCheckAll(true);
    document.querySelector(".checkAll").checked = false;
  };

  const handleDeleteTask = (index) => {
    const allTasks = [...tasks];
    allTasks.splice(index, 1);
    setTasks(allTasks);
  };

  return (
    <div className="container">
      <div className="header">
        <div className="left">
          <input
            type="checkbox"
            className="checkAll"
            onClick={handleCheckAll}
          />
          <span>Check All</span>
        </div>
        <button className="btn clear" onClick={handleDeleteAll}>
          Delete All
        </button>
      </div>
      <div className="body">
        <span className="progress-num">{percent}%</span>
        <div className="progress">
          <div
            className={`bar ${completed === tasks.length ? "bg-green" : ""}`}
            style={style}
          ></div>
        </div>
      </div>
      <ul className="todoList">
        {tasks.map((input, index) => {
          return (
            <div className="item" key={index}>
              <input
                type="checkbox"
                className="item-completed pending"
                onClick={handleCheck}
              />
              <span className="item-description">{input}</span>
              <i
                className="item-delete fa-solid fa-trash-can"
                onClick={() => handleDeleteTask(index)}
              ></i>
            </div>
          );
        })}
      </ul>
      <div className="form">
        <div className="form-add">
          <textarea
            className="add-form"
            placeholder="Add Task"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            autoFocus
          ></textarea>
          <button className="task-success success btn" onClick={handleSubmit}>
            Add
          </button>
          <button className="task-delete delete btn" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
