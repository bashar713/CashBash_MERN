const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const Income = require('../../model/Income');


//Creates 

const createIncome = expressAsyncHandler(async (req, res) => {
    const {title,amount,description} = req?.body;
    try {
        const income = await Income.create({title, amount, description,user:req?.user?._id})
        res.json(income);
    } catch (error) {
        res.json(error);
        throw new Error("Something went wrong!")
    }
});

//Fetch All Incomes
const fetchAllIncome = expressAsyncHandler(async (req, res) => {
    const {page} = req?.query
    try {
        const incomes = await Income.find({user:req?.user});
        res.json(incomes);
    } catch (error) {
        res.json(error);        
    }
})

//Fetch Single Income
const fetchSingleIncome = expressAsyncHandler(async (req, res) => {
    const {id} = req.params;
    try {
        const singleIncome = await Income.findById(id);
        res.json(singleIncome);
    } catch (error) {
        throw new Error("Check The Income Id.")      
    }
})

//Update Income
const updateIncome = expressAsyncHandler(async (req, res) => {
    const {id} = req.params;
    const {title,amount,description} = req?.body;
    try {
        const income = await Income.findByIdAndUpdate(id, {
            title, amount, description
        },{new : true});
        res.json(income);
    } catch (error) {
        throw new Error("Invalid Credentials.");      
    }
})

const deleteIncome = expressAsyncHandler(async (req, res) => {
    const {id} = req.params;
    try {
        const income = await Income.findByIdAndDelete(id);
        if(income){
            res.json("Deleted successfully!");
        }
    } catch (error) {
        throw new Error("Something went wrong.")      
    }
})

module.exports = {
    createIncome,
    fetchAllIncome,
    fetchSingleIncome,
    updateIncome,
    deleteIncome
};