const express = require('express');
const { createExpense, fetchAllExpense, fetchSingleExpense, updateExpense, deleteExpense } = require('../../controllers/expense/expenseCtrl');
const authMiddleware = require('../../middlewares/authMiddleware');
const expenseRouter = express.Router();

expenseRouter.post('/',authMiddleware,createExpense);
expenseRouter.get('/',authMiddleware,fetchAllExpense);
expenseRouter.get('/:id',authMiddleware,fetchSingleExpense);
expenseRouter.put('/:id',authMiddleware,updateExpense);
expenseRouter.delete('/:id',authMiddleware,deleteExpense);	

module.exports = expenseRouter;
