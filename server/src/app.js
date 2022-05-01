const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const dbConnect = require('./config/dbConnect');
const { errorHandler, notFoundHandler } = require('./middlewares/errorMiddleware');
const userRouter = require('./routes/usersRoute/usersRoute');
const incomeRouter = require('./routes/incomeRoute/incomeRoute');
const expenseRouter = require('./routes/expenseRoute/expenseRouter');
const app = express();

//env
dotenv.config();

//dbConnect
dbConnect();

//Middlewares
app.use(express.json());
app.use(cors());
//User route
app.use('/api/users',userRouter);

//Income route
app.use('/api/income',incomeRouter)

//Expense route
app.use('/api/expense',expenseRouter)


//middleware Error
app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;


