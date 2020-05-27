import React from "react";
import logo from "./logo.svg";
import "./App.css";
import VendorDropdown from './components/vendor-dropdown';
import IngredientsTable from "./components/ingredients-table";

function App() {
  return (
    <>
      <div className="main-container">
        <VendorDropdown />
        <IngredientsTable />
      </div>
    </>
  );
}

export default App;
