import React from "react";
import styled from "styled-components";
import Dashboard from "./components/Dashboard";



import { BrowserRouter,Route,Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import ProtectedRoute from "./components/Private/ProtectedRoute";
import Income from "./Pages/Income";
import Expense from "./Pages/Expense";

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/profile" element={<ProtectedRoute/>}>
          <Route exact path="/profile" element={<Profile/>}/>
        </Route>
        <Route exact path="/income" element={<ProtectedRoute/>}>
          <Route exact path="/income" element={<Income/>}/>
        </Route>
        <Route exact path="/expense" element={<ProtectedRoute/>}>
          <Route exact path="/expense" element={<Expense />}/>
        </Route>

        
      </Routes>
    </BrowserRouter>
    </>
  );
}
