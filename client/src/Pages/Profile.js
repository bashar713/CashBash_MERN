
import styled from "styled-components";
import Dashboard from "../components/Dashboard";
import {Routes,Route} from "react-router-dom";
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
