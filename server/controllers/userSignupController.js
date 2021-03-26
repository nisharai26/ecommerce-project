const UsersignupModel = require('../models/userSignupModel');
const {Types} = require('mongoose');


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

