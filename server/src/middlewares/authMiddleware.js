const jwt = require('jsonwebtoken');
const expressAsyncHandler = require('express-async-handler');
const User = require('../model/User');

const authMiddleware = expressAsyncHandler(async (req, res , next) => {
    let token;
    
    if (req?.headers?.authorization?.startsWith('Bearer')) {
        token = req?.headers?.authorization?.split(' ')[1];
        try {
            if(token){
                const decodeUser = jwt.verify(token,process.env.JWT_KEY)
                const user = await User.findById(decodeUser?.id);
                req.user = user;
                next();
            }
        } catch (error) {
            throw new Error("Token Expired.")
        }
    } else {
        throw new Error("No Token Found In The Header.")
    }
})

module.exports = authMiddleware;