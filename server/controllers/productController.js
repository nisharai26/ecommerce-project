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

