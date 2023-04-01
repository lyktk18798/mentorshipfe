import React from "react";
import { Header } from "./Header";
import Contact from "../contact";
import EmployeeList from "./EmployeeList";


function HomePage() {
   
  return (
    <div>
      <Header />
      <form action="">
        <input
          type="text"
          placeholder="Search.."
          name="search"
          className="w-100 rounded form-control input-lg"
        />
      </form>
   <EmployeeList />
    </div>
  );
}
export default HomePage;
