const expressAsyncHandler = require('express-async-handler');
const generateToken = require('../../middlewares/generatetoken');
const User = require("../../model/User");

//Register User
const registerUser = expressAsyncHandler(async (req,res) => {
    const {firstName,lastName,email,password} = req?.body; // req && req.body;
    //Check if the user already exists
    const userExists = await User.findOne({email: req.body.email});
    if(userExists) throw new Error("User already exists");
    try {
        const user = await User.create({firstName,lastName,email,password});
        res.status(200).json(user)
    } catch (error) {
        res.json({error: error});
    }
});

//Fetch Users
const fetchUsers = expressAsyncHandler(async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (error) {
        res.json(error);
    }
})

//login user
const loginUser = expressAsyncHandler(async (req, res) => {
    const {email,password} = req?.body;
    //find user in db
    const userFound = await User.findOne({email: email});

    //check if user password match
    if(userFound && await userFound?.isPasswordMatch(password)){
        res.json({
            _id: userFound?._id,
            firstName: userFound?.firstName,
            lastName : userFound?.lastName,
            email : userFound?.email,
            isAdmin : userFound?.isAdmin,
            token:generateToken(userFound?._id)
        });
    }else{
        res.status(401);
        throw new Error("Invalid Login Credentials");
    }
})



module.exports = {registerUser,fetchUsers,loginUser};