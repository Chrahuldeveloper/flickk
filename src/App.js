import React from "react";
import { Home, SignUp } from "./Pages";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/signup" element={<Home />} />
      <Route path="/" element={<SignUp />} />
    </Routes>
  );
}
