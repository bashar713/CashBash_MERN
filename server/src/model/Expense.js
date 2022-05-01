const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');



//Schema
const expenseSchema = mongoose.Schema(
    {
        title:{
            required: [true,'Title is required'],
            type: String,
        },
        description:{
            required: [true,'Description is required'],
            type: String,
        },
        type:{
            default : "expense",
            type: String,
        },
        amount:{
            required: [true,'Amount is required'],
            type: Number,
        },
        user : {
            type : mongoose.Schema.Types.ObjectId, //must be mongodb id
            ref : "User",
            required : [true,'User is required']
        },

    },
    {
        timestamps: true, 
        toJSON : {
            virtuals : true
        },
        toObject: {
            virtuals : true
        }
    } 
); 

// expenseSchema.plugin(mongoosePaginate)
const Expense = mongoose.model('Expense',expenseSchema);
module.exports = Expense;






