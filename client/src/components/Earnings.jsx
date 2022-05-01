import React from "react";
import styled from "styled-components";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
// import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";
import { cardStyles } from "./ReusableStyles";

const data = [
  {
    name: "Sunday",
    Expense: 4000,
    Income: 2400,
    amt: 2400
  },
  {
    name: "Monday",
    Expense: 3000,
    Income: 1398,
    amt: 2210
  },
  {
    name: "Tuesday",
    Expense: 2000,
    Income: 9800,
    amt: 2290
  },
  {
    name: "Wednesday",
    Expense: 2780,
    Income: 3908,
    amt: 2000
  },
  {
    name: "Thursday",
    Expense: 1890,
    Income: 4800,
    amt: 2181
  },
  {
    name: "Friday",
    Expense: 2390,
    Income: 3800,
    amt: 2500
  },
  {
    name: "Saturday",
    Expense: 3490,
    Income: 4300,
    amt: 2100
  }
];
export default function Earnings() {
  return (
    <Section>
      <div className="top">
        <div className="info">
          <h5>This month earnings</h5>
          <h1>$682.5</h1>
          <div className="growth">
            <span>+2.45%</span>
          </div>
        </div>
      </div>
      <div className="chart">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Income" stackId="a" fill="#51a62d" />
            <Bar dataKey="Expense" stackId="a" fill="#ffc107" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Section>
  );
}
const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 30rem;
  ${cardStyles}
  padding: 2rem 0 0 0;
  .top {
    .info {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.2rem;
      h1 {
        font-size: 2rem;
      }
      .growth {
        background-color: #d7e41e1d;
        padding: 0.5rem;
        border-radius: 10px;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #ffc107;
          span {
            color: black;
          }
        }
        span {
          color: #ffc107;
        }
      }
    }
  }
  .chart {
    height: 70%;
    .recharts-default-tooltip {
      background-color: black !important;
      border-color: black !important;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
  }
`;

{/* <AreaChart
width={500}
height={400}
data={data}
margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
>
<Tooltip cursor={false} />
<Area
animationBegin={800}
animationDuration={2000}
type="monotone"
dataKey="data"
stroke="#ffc107"
fill="#8068233e"
strokeWidth={4}
/>
</AreaChart> */}







// const data = [
//   { data: 4500 },
//   {
//     data: 5000,
//   },
//   {
//     data: 4700,
//   },
//   {
//     data: 4400,
//   },
//   {
//     data: 4800,
//   },
//   {
//     data: 5300,
//   },
//   {
//     data: 5800,
//   },
//   {
//     data: 6000,
//   },
//   {
//     data: 6300,
//   },
//   {
//     data: 6580,
//   },
//   {
//     data: 6780,
//   },
//   {
//     data: 6680,
//   },
//   {
//     data: 6500,
//   },
//   {
//     data: 6300,
//   },
//   {
//     data: 5900,
//   },
//   {
//     data: 5700,
//   },
//   {
//     data: 5500,
//   },
//   {
//     data: 5300,
//   },
//   {
//     data: 5100,
//   },
//   {
//     data: 5090,
//   },
//   {
//     data: 5300,
//   },
//   {
//     data: 5800,
//   },
//   {
//     data: 6000,
//   },
//   {
//     data: 6300,
//   },
//   {
//     data: 6780,
//   },
//   {
//     data: 6500,
//   },
//   {
//     data: 6300,
//   },
//   {
//     data: 6500,
//   },
//   {
//     data: 6700,
//   },
//   {
//     data: 7000,
//   },
//   {
//     data: 7300,
//   },
//   {
//     data: 7500,
//   },
//   {
//     data: 7700,
//   },
//   {
//     data: 8090,
//   },
//   {
//     data: 8190,
//   },
//   {
//     data: 7990,
//   },

//   {
//     data: 7700,
//   },
//   {
//     data: 7500,
//   },
//   {
//     data: 7300,
//   },
//   {
//     data: 7000,
//   },
//   {
//     data: 6700,
//   },
//   {
//     data: 6500,
//   },
//   {
//     data: 6300,
//   },
//   {
//     data: 6500,
//   },
//   {
//     data: 6780,
//   },
//   {
//     data: 6300,
//   },
//   {
//     data: 6000,
//   },
//   {
//     data: 5800,
//   },

//   {
//     data: 5490,
//   },
//   {
//     data: 6000,
//   },
//   {
//     data: 8000,
//   },
// ];