const express = require('express')
const router = express.Router()


const rides = [{
  pickup : {lat :23, long:24},
  carName : "civic"
},
{
    pickup : {lat :24 , long : 26},
    carName : "ferrari"
}]

router.get('/getRides', (req,res)=>{
    res.send({message:"success", data:rides})

})

router.post('/addRides', (req,res)=>{
    res.send({message:" Data Stored Successfully", data:rides})

})

router.put('/updateRides', (req,res)=>{
    res.send({message:"Data Update Successfully", data:rides})

})

router.delete('/deleteRides', (req,res)=>{
    res.send({message:"Data Delete Success", data:rides})

})

module.exports = router

