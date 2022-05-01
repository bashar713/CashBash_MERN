const express = require('express');
const { registerUser, fetchUsers, loginUser} = require('../../controllers/users/usersCtrl');

const userRouter = express.Router();

userRouter.post('/register',registerUser);
userRouter.post('/login',loginUser);
userRouter.get('/',fetchUsers);

module.exports = userRouter;
