const UsersignupModel = require('../models/userSignupModel');
const {Types} = require('mongoose');
const bcrypt = require('bcrypt');
const {nanoid} = require('nanoid');
const SessionModel = require('../models/sessionModel');

exports.Signup = (req, res) =>{
    
   let signUpUser = new UsersignupModel({
        _id:new Types.ObjectId(),
        email:req.body.email,
        password:req.body.password,
        name:req.body.name,
        address1:req.body.address1,
        address2:req.body.address2,
        postcode:req.body.postcode,
        city:req.body.city,
        country:req.body.country
    } , { toObject: {
        virtuals:true
    }
    });
    signUpUser.save();
     res.send({
        success:true,
        message:'New customer was created'
    });
};

exports.checkUser = async(req, res) => { 
   let matchuser = await UsersignupModel.getUserbyEmail(req.body.email);
    if (!matchuser) {
 res.send({err: 'User not found'}); 
 return;
 }
 let passwordsMatch = req.body.password;
// let passwordsMatch = bcrypt.compareSync(req.body.password, matchuser.password);
    if (passwordsMatch==matchuser.password) {
        
res.send({
     matchuser:true,
     message:'Login Successful'
    }); 
} else {
 res.send({err: 'Incorrect password'}); 
}};

// bcrypt.hash(password,12,(err,hash)=>{ 
    
// const user = new UsersignupModell({ 
// email, 
// password:hash,
// name, 
// address1, 
// address2, 
// postcode,
// city,
// country
// }) 
// signUpUser.save();
// });

// req.session.userID = nanoid();
// req.session.name=name;
// req.session.save();
// console.log(req.session); 
// res.render('index');

// exports.getProfile=(req, res) => 
// { 
// console.log(req.session); 
// res.render('profile', {name: req.session.name});
// };



exports.checkUserSession = async(req,res,next)=>{  
    let sessions = await SessionModel.find({});
    
    let sessionFound = false;
    
    for (let session of sessions) {
        session = session.toObject();
        console.log(JSON.parse(session.session));
        //check if userID of session in DB matches req.session.userID
        if (JSON.parse(session.session).userID == req.session.userID) {
           next();
           return;
        } 
    }
         res.redirect('/');
         
    }
   