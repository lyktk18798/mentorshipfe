import { useState } from "react";
import "./App.css";
import List from "./List";
import Alert from "./Alert";


export default function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([{id: 1, title: 'Buy milk'}, {id: 2, title: 'Buy a new bottle of cooking oil'}]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditId] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      //If emtpy input => display alert
      showAlert(true, "danger", "Please enter a value");
    } else if (name && isEditing) {
      //Handle editing
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName('')
      setEditId(null)
      setIsEditing(false)
      showAlert(true, 'success', 'Updated successfully')
    } else {
      //Show alert
      showAlert(true, "success", "Added successfully to the list");
      //Create new item
      const newItem = {
        id: new Date().getTime().toString(),
        title: name,
      };
      setList([...list, newItem]);
      setName("");
    }
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  const clearAll = () => {
    showAlert(true, "success", "Removed all!");
    setList([]);
  };

  const removeItem = (id) => {
    showAlert(true, "danger", "Removed item");
    setList(list.filter((item) => item.id !== id));
  };

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditId(id);
    setName(specificItem.title);
  };
  return (
    <>
      <div className="container">
        <div className="grocery-wrap shadow bg-body-tertiary rounded">

        
          <form onSubmit={handleSubmit}>
            {alert.show && (
              <Alert {...alert} removeAlert={showAlert} list={list} />
            )}
            <h1 className="text-center">List Grocery Today</h1>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="e.g: Eggs"
                aria-label="e.g: Eggs"
                aria-describedby="button-addon2"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <button className="btn btn-success" type="submit">
                {isEditing ? "Edit" : "Add"}
              </button>
            </div>
          </form>


          {list.length > 0 && (
            <>
              <List items={list} removeItem={removeItem} editItem={editItem} />
              <div className="button-clear-all text-center">
                <button
                  onClick={clearAll}
                  className="btn btn-danger mt-4"
                  type="button"
                >
                  Clear all
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
