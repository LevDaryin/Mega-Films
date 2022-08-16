import HomePage from "./pages/HomePage/HomePage";
import Index from "./pages/MoviePage/Index";
import { Route, Routes } from "react-router-dom";
import React from "react";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movie/:id" element={<Index />} />
    </Routes>
  );
}

export default App;
