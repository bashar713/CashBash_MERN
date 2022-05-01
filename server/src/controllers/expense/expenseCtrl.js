const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const Expense = require('../../model/Expense');

//Creates 
const createExpense = expressAsyncHandler(async (req, res) => {
    const {title,amount,description} = req?.body;
    console.log(req?.body)
    try {
        const expense = await Expense.create({title, amount, description,user:req?.user?._id})
        res.json(expense);
    } catch (error) {
        res.json(error);
    }
});

//Fetch All Expense
const fetchAllExpense = expressAsyncHandler(async (req, res) => {
    const {page} = req?.query;
    try {
        const expenses = await Expense.find({user:req?.user});
        res.json(expenses);
    } catch (error) {
        res.json(error);        
    }
})

//Fetch Single Expense
const fetchSingleExpense= expressAsyncHandler(async (req, res) => {
    const {id} = req.params;
    try {
        const singleExpense = await Expense.findById(id);
        res.json(singleExpense);
    } catch (error) {
        throw new Error("Check The Expense Id.")      
    }
})

//Update Expense
const updateExpense = expressAsyncHandler(async (req, res) => {
    const {id} = req.params;
    const {title,amount,description} = req?.body;
    try {
        const expense = await Expense.findByIdAndUpdate(id, {
            title, amount, description
        },{new : true});
        res.json(expense);
    } catch (error) {
        throw new Error("Invalid Credentials.");      
    }
})

const deleteExpense = expressAsyncHandler(async (req, res) => {
    const {id} = req.params;
    try {
        const expense = await Expense.findByIdAndDelete(id);
        if(expense){
            res.json("Deleted successfully!");
        }
    } catch (error) {
        throw new Error("Something went wrong.")      
    }
})

module.exports = {
    createExpense,    
    fetchAllExpense,
    fetchSingleExpense,
    updateExpense,
    deleteExpense
};