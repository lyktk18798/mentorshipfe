import React from "react";

export default function List({ items, removeItem, editItem }) {
  return (
    <ul className="list-group list-group-flush">
      {items.map((item) => {
        return (
          <li key={item.id} className="list-group-item">
            <div className="d-flex">
              <div className="me-auto">{item.title}</div>
              <div className="px-3">
                <i
                  onClick={() => editItem(item.id)}
                  className="bi bi-pencil-square"
                ></i>
              </div>
              <div>
                <i
                  onClick={() => removeItem(item.id)}
                  className="bi bi-x-lg"
                ></i>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
