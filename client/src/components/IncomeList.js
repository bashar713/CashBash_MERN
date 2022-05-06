import React, { useEffect } from "react";
import styled from "styled-components";
import { HiArrowNarrowRight } from "react-icons/hi";
import avatarImage from "../assets/profile.jpeg";
import { cardStyles } from "./ReusableStyles";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllIncAction } from "../Redux/Slices/incomeSlices";
import { formatDate } from "../utils/dateFormat";



export default function IncomeList() {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchAllIncAction())
    },[dispatch])

    //Get All Incomes
    const allIncome = useSelector(state=>state?.income)
    const {incomeList,userLoading} = allIncome;
    // console.log(incomeList);
    const transactions = [
        {
        image: avatarImage,
        name: "Gift From My Freind",
        time: "Today, 16:36",
        amount: "+$50",
        },
        {
        image: avatarImage,
        name: "Car Gas",
        time: "Today, 08:49",
        amount: "-$25",
        },
        {
        image: avatarImage,
        name: "Income",
        time: "Yesterday, 14:36",
        amount: "+$1500",
        },
    ];
  return (
    <Section>
      <div className="title">
        <h2>Your Income</h2>
      </div>
      <div className="transactions">
      {incomeList?.length > 0 ? incomeList?.slice(0).reverse().map((incomeItem,key) => {
        return (
          <div className="transaction" key={key}>
            <div className="transaction__title">
              <div className="transaction__title__image">
                <img src={transactions[0]?.image} alt="" />
              </div>
              <div className="transaction__title__details">
                <h3>{incomeItem?.title}</h3>
                <h5>{formatDate(incomeItem?.createdAt)}</h5>
              </div>
            </div>
            <div className="transaction__amount">
              <span>+{(incomeItem?.amount).toLocaleString()}₪</span>
            </div>
          </div>
        );
      }) : <h1>No Data Found.</h1>}

      </div>
      <a className="view" href="#">
        View all <HiArrowNarrowRight />
      </a>
    </Section>
  );
}













































const Section = styled.section`
  ${cardStyles};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .title {
    h2 {
      color: #b4cc4e;
      font-family: "Permanent Marker", cursive;
      letter-spacing: 0.3rem;
    }
  }
  .transactions {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
    .transaction {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      &__title {
        display: flex;
        gap: 1rem;
        &__image {
          img {
            height: 2.5rem;
            border-radius: 3rem;
          }
        }
        &__details {
        }
      }
      &__amount {
        background-color: #d7e41e1d;
        padding: 0.2rem 0.5rem;
        width: 5rem;
        border-radius: 1rem;
        cursor: pointer;
        text-align: center;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #b4cc4e;
          span {
            color: black;
          }
        }
        span {
          color: #b4cc4e;
        }
      }
    }
  }
  .view {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-decoration: none;
    color: #b4cc4e;
    font-weight: bold;
    margin-top: 1rem;
    gap: 0.5rem;
    svg {
      transition: 0.3s ease-in-out;
      font-size: 1.4rem;
    }
    &:hover {
      svg {
        transform: translateX(0.5rem);
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 375px) {
    .transactions {
      .transaction {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
      }
    }
  }
`;
