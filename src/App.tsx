import React from 'react';
import logo from './logo.svg';
import './App.css';

import Home from "./Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Home />} />
  </Routes>
  </BrowserRouter></>
)

}

export default App;