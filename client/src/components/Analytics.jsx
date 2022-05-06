import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";
import { BiGroup } from "react-icons/bi";
import { FiActivity } from "react-icons/fi";
import { cardStyles } from "./ReusableStyles";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllIncAction } from "../Redux/Slices/incomeSlices";
import { calcProfit, calcTotalExpensesInThisMonth, sumData } from "../utils/usefulFunctions";



export default function Analytics() {
  const incomeState = useSelector(state=>state?.income);
  const expenseState = useSelector(state=>state?.expense);

  const {incomeList} = incomeState;
  const {expensesList} = expenseState;

  const [totalIncome , setTotalIncome] = useState(0);
  const [profit , setProfit] = useState(0);
  const [spendThisMonth , setSpendThisMonth] = useState(0);

  useEffect(()=>{
    setTotalIncome(sumData(incomeList))
    setProfit(calcProfit(sumData(incomeList),sumData(expensesList)))
    setSpendThisMonth(calcTotalExpensesInThisMonth(expensesList));
  },[incomeList,expensesList,spendThisMonth])

  return (
    <Section>
      <div className="analytic ">
        <div className="logo">
          <BsFillCalendar2WeekFill />
        </div>
        <div className="content">
          <h5>Spent this month</h5>
          <h2>{spendThisMonth}₪</h2>
        </div>
      </div>
      <div className="analytic">
        <div className="logo">
          <IoStatsChart />
        </div>
        <div className="content">
          <h5>Profit</h5>
          <h2>{profit}₪</h2>
        </div>
      </div>
      <div className="analytic">
        <div className="logo">
          <BiGroup />
        </div>
        <div className="content">
          <h5>Total Income</h5>
          <h2>{totalIncome}₪</h2>
        </div>
      </div>
      {/* <div className="analytic ">
        <div className="logo">
          <FiActivity />
        </div>
        <div className="content">
          <h5>Activity</h5>
          <h2>$540.50</h2>
        </div>
      </div> */}
    </Section>
  );
}
const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  .analytic {
    ${cardStyles};
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    transition: 0.5s ease-in-out;
    &:hover {
      background-color: #ffc107;
      color: black;
      svg {
        color: white;
      }
    }
    .logo {
      background-color: black;
      border-radius: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1.5rem;
      svg {
        font-size: 1.5rem;
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    .analytic {
      &:nth-of-type(3),
      &:nth-of-type(4) {
        flex-direction: row-reverse;
      }
    }
  }
`;
