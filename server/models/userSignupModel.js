const {Schema,model}= require('mongoose');


const user = new Schema({
    _id:{type:Schema.Types.ObjectId},
    email:{type:String , required:true},
    password:{type:String , required:true},
    name:{type:String , required:true},
    address1:{type:String, required:true},
    address2:{type:String, required:true},
    postcode:{type:String, required:true},
    city:{type:String, required:true},
    country:{type:String, require:true}
});
// user.statics.getUserByName = async function(name){
//     let user = await this.findOne({name});
   
//     if(user){
//         return user.toObject();
//     } else {
//         return false;
//     }
   
//    }
   user.statics.checkUserExists = async function(name){
       let exists = await this.exists({name});
       return exists;
   }
module.exports=model('users',user);