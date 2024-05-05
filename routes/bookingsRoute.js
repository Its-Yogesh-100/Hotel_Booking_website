const express = require('express');
const router = express.Router();
const Booking = require("../models/booking");
const User =require('../models/user');
const { v4: uuidv4 } = require("uuid");
const stripe = require("stripe")('sk_test_51PCpvlSDGyf26xZtTMX4reEOKSKbvBhJnoIYRDc2cM2G6ikzt3HfE1gtQOnE9q1v52R41uKhBO84WSqV6X4Y86qf00mQ7qPVuv')
router.post('/bookroom',async(req,res) => {

  const {
    room,
    userid,
    fromdate,
    todate,
    totalamount,
    totaldays,
    token
 } = req.body







 try {

    const newbooking = new Booking({
        room: room.name,
       roomid: room._id,
        userid,
        fromdate,
        todate,
        totalamount,
        totaldays,
        transactionId: '1234'
    })

    const booking = await newbooking.save();
    res.send('Room Booked successfully ')
 }
   catch (error) {

    return res.status(400).json({error})


 }


});

module.exports =router