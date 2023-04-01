import React from "react";
import EmployeePage from "./components/EmployeePage";
import HomePage from "./components/HomePage";
function App() {
  return (
    <div className="container ">
      <div className="row">
        <div className="col mt-3">
          <HomePage />
        </div>
        <div className="col mt-3 border-danger">
          <EmployeePage />
        </div>
        
      </div>
    </div>
  );
}

export default App;
