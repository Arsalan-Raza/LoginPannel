const mongoose = require('mongoose')
const User = require("../model/database")

// Auth middleware that checks if the user is logged in
exports.isLoggedIn = (req, res, next) => {
  req.user ? next() : res.send('NOT LOGGED IN')
}

exports.checkUser = async (req,res)=>{
   const Guser = req.body
   if(Guser.role == 'admin')
   {
    res.json({
        message:"You have full access"
    })
   }else{
    res.json({
        message:"You have limited Access"
    })
   }
}

