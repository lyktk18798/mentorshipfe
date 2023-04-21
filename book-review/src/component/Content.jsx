import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Content = ({ bookList, filterItems }) => {
  return (
    <div className="container">
      {bookList
        ? bookList
            .filter((item) =>
              item.name.toLowerCase().includes(filterItems.toLowerCase().trim())
            )
            .map((item) => {
              const notify = () => toast(`Added "${item.name}" to your cart`);
              return (
                <div className="row book-group" key={item.id}>
                  <div className="col-lg-3 col-md-6 row-group">
                    <img src={item.src} />
                  </div>
                  <div className="col-lg-9 col-md-6 row-group">
                    <h1 className="title">{item.name}</h1>
                    <p className="author">{item.author}</p>
                    <p className="description">{item.description}</p>
                    <div className="btn-wrap text-center">
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={notify}
                      >
                        Buy this book
                      </button>
                      <ToastContainer
                        position="top-right"
                        autoClose={2000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="dark"
                      />
                    </div>
                  </div>
                </div>
              );
            })
        : null}
    </div>
  );
};

export default Content;
