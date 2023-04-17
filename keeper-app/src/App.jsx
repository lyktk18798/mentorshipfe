import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note";
// import notes from "./notes";

const App = () => {
  return (
    <div>
      <Header></Header>
      <Note />
      <Footer></Footer>
    </div>
  );
};

export default App;
