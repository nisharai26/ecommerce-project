const {Schema,model}= require('mongoose');

const product = new Schema({
    category: {type: String, required: true},
    image: {type: String, required: true},
    imageAlt: {type: String, required: true},
    brand: {type: String, required: true},
    model: {type: String, required: true},
    price: {type: Number, required: true},
    description: {type: String, required: true}
})

module.exports=model('Products', product);