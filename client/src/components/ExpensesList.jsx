import React, { useEffect,useState } from "react";

import styled from "styled-components";
import { HiArrowNarrowRight } from "react-icons/hi";
import avatarImage from "../assets/profile.jpeg";
import { cardStyles } from "./ReusableStyles";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllExpAction } from "../Redux/Slices/expenseSlices";
import { formatDate } from "../utils/dateFormat";

import Popup from "./Popup.js";



export default function ExpensesList() {
    const [isOpen,setIsOpen] = useState(false);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchAllExpAction())
    },[dispatch])

    //Get All Expenses
    const allExpenses = useSelector(state=>state?.expense)
    const {expensesList,userLoading} = allExpenses;
   
    const transactions = [
        {
          image: avatarImage,
        }
    ];
  return (
    <>

    <Section>
      <div className="title">
        <h2>Your Expenses</h2>
      </div>
      <div className="transactions">
        {
          expensesList?.length > 0 ?
          <>
            {
              expensesList?.length <= 5 ? expensesList?.slice(0).reverse().map((expenseItem,key) => {
                return (
                  <div className="transaction" key={key}>
                    <div className="transaction__title">
                      <div className="transaction__title__image">
                        <img src={transactions[0]?.image} alt="" />
                      </div>
                      <div className="transaction__title__details">
                        <h3>{expenseItem?.title}</h3>
                        <h5>{formatDate(expenseItem?.createdAt)}</h5>
                      </div>
                    </div>
                    <div className="transaction__amount">
                    <span>-{(expenseItem?.amount).toLocaleString()}₪</span>
                  </div>
                  </div>
                  );
              }) 
              :
              expensesList?.slice(expensesList?.length/2-1 | 0,expensesList?.length).reverse().map((expenseItem,key) => {
                return (
                  <div className="transaction" key={key}>
                  <div className="transaction__title">
                  <div className="transaction__title__image">
                  <img src={transactions[0]?.image} alt="" />
                  </div>
                  <div className="transaction__title__details">
                  <h3>{expenseItem?.title}</h3>
                  <h5>{formatDate(expenseItem?.createdAt)}</h5>
                  </div>
                  </div>
                  <div className="transaction__amount">
                  <span>-{(expenseItem?.amount).toLocaleString()}₪</span>
                  </div>
                  </div>
                );
              })  
            }
          </> :<h1>No Data Found.</h1>
        } 
      </div>
      <a onClick={(e)=>{e.preventDefault();console.log("Yes");setIsOpen((prev)=>!prev)}} className="view" href="#">
        View all <HiArrowNarrowRight />
      </a>

    </Section>
    <Popup trigger={true}>
      <h3>My popup</h3>
    </Popup>
    </>
  );
}




/*
  {
    expensesList?.length > 0 ?
      <>
      expensesList?.length <= 5 ? expensesList?.slice(0).reverse().map((expenseItem,key) => {
        return (
          <div className="transaction" key={key}>
            <div className="transaction__title">
              <div className="transaction__title__image">
                <img src={transactions[0]?.image} alt="" />
              </div>
              <div className="transaction__title__details">
                <h3>{expenseItem?.title}</h3>
                <h5>{formatDate(expenseItem?.createdAt)}</h5>
              </div>
            </div>
            <div className="transaction__amount">
            <span>-{(expenseItem?.amount).toLocaleString()}₪</span>
          </div>
          </div>
          );
        }) 
        :
        expensesList?.slice(0,expensesList?.length/2-1 | 0).reverse().map((expenseItem,key) => {
          return (
            <div className="transaction" key={key}>
            <div className="transaction__title">
            <div className="transaction__title__image">
            <img src={transactions[0]?.image} alt="" />
            </div>
            <div className="transaction__title__details">
            <h3>{expenseItem?.title}</h3>
            <h5>{formatDate(expenseItem?.createdAt)}</h5>
            </div>
            </div>
            <div className="transaction__amount">
            <span>-{(expenseItem?.amount).toLocaleString()}₪</span>
            </div>
            </div>
          );
        })  
      </> 
      :<h1>No Data Found.</h1>
  }
    */
   
   
   
   
   
   
   
   
   
   
   
   {/* {expensesList?.length > 0 ? expensesList?.slice(expensesList?.length,expensesList.length/2).reverse().map((expenseItem,key) => {
     return (
       <div className="transaction" key={key}>
         <div className="transaction__title">
           <div className="transaction__title__image">
             <img src={transactions[0]?.image} alt="" />
           </div>
           <div className="transaction__title__details">
             <h3>{expenseItem?.title}</h3>
             <h5>{formatDate(expenseItem?.createdAt)}</h5>
           </div>
         </div>
         <div className="transaction__amount">
           <span>-{(expenseItem?.amount).toLocaleString()}₪</span>
         </div>
       </div>
     );
   }) : <h1>No Data Found.</h1>} */}
   
   
   


























const Section = styled.section`
  ${cardStyles};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .title {
    h2 {
      color: #ffc107;
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
  .view {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-decoration: none;
    color: #ffc107;
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

{/* {expensesList?.docs.map((expenseItem,key) => {
  return (
    <div className="transaction" key={key}>
      <div className="transaction__title">
        <div className="transaction__title__image">
          <img src={transactions[0]?.image} alt="" />
        </div>
        <div className="transaction__title__details">
          <h3>{expenseItem?.title}</h3>
          <h5>{expenseItem?.description}</h5>
        </div>
      </div>
      <div className="transaction__amount">
        <span>{expenseItem?.amount}₪</span>
      </div>
    </div>
  );
})} */}