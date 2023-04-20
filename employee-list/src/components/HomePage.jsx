import React from "react";
import EmployeeList from "./EmployeeList";
import SearchBar from "./SearchBar";

function HomePage() {
  return (
    <div>
      <h3 className="text-center">Employee Directory</h3>
      <SearchBar />
      <EmployeeList />
    </div>
  );
}
export default HomePage;
