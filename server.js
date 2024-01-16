const express=require('express')
const connectDb = require('./config/dbconnection.js')
const app=express()
app.use(express.json())
const dotenv=require('dotenv').config()
const port = process.env.PORT || 3000  //if evn has port then thake the value of env or take default port value  as 3000
const contactsRouter = require('./routes/contactRouter.js')


// app.use(express.json()) //middelware function
// app.use((req,res,next)=>{
//     console.log(`The url is : ${req.url} ,The method is ${req.method}`);
//     console.log(Date.now());
//     next()
// })





app.use('/api/contacts',contactsRouter)   //routing to contactRouter
app.get('/',(req,res)=>{
    res.status(200).json({message: "WHATZAAAPPP....!!!!"})
})




app.listen(port,()=>{
    console.log(`server running ${port}`);
    connectDb()
})


// // created node project
// dependency intall
//  nodemon install
//  hchnaged to dev
//  process.eve
//  thunderclient
//  split