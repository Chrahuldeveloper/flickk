import React from "react";
import SignUp from "./Pages/SignUp";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}
