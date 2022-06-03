import styled from "styled-components";
import { useEffect } from "react";
import axios from "axios";

import {Routes,Route} from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Sidebar from "../components/Sidebar";
import Income from "./Income";
import Expense from "./Expense";


export default function Profile() {

  return (
    <Div>
      <Sidebar />
      <Dashboard />
    </Div>
  );
}

const Div = styled.div`
  position: relative;
`;
