const productModel = require('../models/productModel');
const Products =  require('../models/productModel');

exports.createProduct = (req, res) => {
    console.log('req.body', req.body);
    const product = new Products(req.body);
    product.save((err, product) => {
        if (err) {
            return res.status(400).json({
                error
            })
        }
        res.json({
            product
        })
    })
}

exports.getProducts = async (req, res) => {
    let products = await productModel.find({});
    if (products.length == 0) {
        res.send({
            success: false,
            message: 'No products found'
        });
        return
    };

    products = products.map(products => products.toObject());

    res.send({
        success:true,
        message: `${products.length} products found`,
        data: products
    });
}