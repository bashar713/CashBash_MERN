const express = require('express');
const { createIncome, fetchAllIncome,fetchSingleIncome, updateIncome, deleteIncome } = require('../../controllers/income/incomeCtrl');
const authMiddleware = require('../../middlewares/authMiddleware');
const incomeRouter = express.Router();

incomeRouter.post('/',authMiddleware,createIncome);
incomeRouter.get('/',authMiddleware,fetchAllIncome);
incomeRouter.get('/:id',authMiddleware,fetchSingleIncome);
incomeRouter.put('/:id',authMiddleware,updateIncome);
incomeRouter.delete('/:id',authMiddleware,deleteIncome);

module.exports = incomeRouter;
