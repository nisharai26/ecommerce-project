const {Schema,model}= require('mongoose');


const customer = new Schema({
    name:{type:String , required:true},
    addressline1:{type:String ,required:true},
    addressline2:{type:String ,required:false},
    postcode:{type:String,required:true},
    email:{type:String , required:true},
    password:{type:String , required:true,minLength:6},
    orders :{type:Array,required:true}
   
   
})


module.exports=model('customers',customer);