import React from "react";

const Navbar = ({ filterItems, onFilterItemsChange }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onFilterItemsChange(filterItems);
  };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid navbar-wrapper">
        <a className="navbar-brand brand" href="#">
          BOOK REVIEW
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Books
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Other</a>
            </li>
          </ul>
          <form className="d-flex" role="search" onSubmit={handleSubmit}>
            {/* SEARCH BOOK TITLE  */}
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={filterItems}
              onChange={(e) => onFilterItemsChange(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;