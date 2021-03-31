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
// user.methods.generateHash = function(password) {
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// };

// // checking if password is valid
// user.methods.validPassword = function(password) {
//     return bcrypt.compareSync(password, this.password);
// };

// user.statics.getUserByName = async function(name){
//     let user = await this.findOne({name});
   
//     if(user){
//         return user.toObject();
//     } else {
//         return false;
//     }
   
//    }
user.statics.getUserbyEmail= async function(email){
    let user = await this.findOne({email});
   
    if(user){
        return user.toObject();
    } else {
        return false;
    }
   
   }
   user.statics.checkUserExists = async function(email){
       let exists = await this.exists({email});
       return exists;
   }
  
module.exports=model('users',user);