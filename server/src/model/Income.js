const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

//Schema
const incomeSchema = mongoose.Schema(
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
            default : "income",
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
        }
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

// incomeSchema.plugin(mongoosePaginate)

const Income = mongoose.model('Income',incomeSchema);
module.exports = Income;




