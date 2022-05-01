const mongoose = require('mongoose');
const dbConnect = async()=>{
    try{
        await mongoose.connect(process.env.DB_STRING,{
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log("DB connected successfully");
    }
    catch(e){
        console.error(e.message);
    }
}

module.exports = dbConnect;

