const {Schema,model}= require('mongoose');


const product = new Schema({
    title: {type: String, required: true},
    category: {type: String, required: true},
    manufacturer: {type: String, required: true},
    price: {type: Number, required: true},
    description: {type: String, required: true}
})


module.exports=model('products', product);