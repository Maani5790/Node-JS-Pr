const express = require('express')
const router = express.Router()




router.get('/sendMsg', (req,res)=>{
    res.send({message:"Send Message successfully"})

})

router.post('/replyMsg', (req,res)=>{
    res.send({message:" Replied Successfully"})

})

router.put('/updateMsg', (req,res)=>{
    res.send({message:"Mesage Update Successfully"})

})



module.exports = router

