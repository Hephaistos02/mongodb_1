const mongoose = require('mongoose')
const connectDb = async() => {
    try{
        await mongoose.connect(process.env.CONNECTION_STRING)
        console.log('DataBAse Connected',mongoose.connection.host,mongoose.connection.name);
    }
    catch(err) {
        console.log(err);
    }
};
module.exports=connectDb