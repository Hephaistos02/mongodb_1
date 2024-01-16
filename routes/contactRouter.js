const express = require('express')
const router = express.Router()
router.use((req,res,next)=>{
console.log("Middleware is inside the router");
next()
})
const {getContact, postContact} = require('../contollers/contactController.js')
router.route('/').get(getContact).post(postContact)

//if there is a same route we can chain them together (get and post)

router.route('/:id').put((req,res)=>{
    res.status(200).json({message: `UPDATED FOR"${req.params.id}`})
    
})

router.route('/:id').delete((req,res)=>{
    res.status(200).json({message: `DELETED ${req.params.id}`})
})


module.exports=router