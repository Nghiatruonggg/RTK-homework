import React from "react";
import Listing from "./components/Listing";
import { Routes, Route } from "react-router-dom";
import AddItem from "./components/AddItem";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Listing/>}/>
      <Route path="/add" element={<AddItem/>}/>
    </Routes>
  );
};

export default App;
