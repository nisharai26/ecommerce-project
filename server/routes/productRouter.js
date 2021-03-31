const {Router} = require('express');
const router = Router();

const controller = require('../controllers/productController');

router.get('/products/all', controller.getProducts);
router.post('/products/create', controller.createProduct);
// router.delete('/products/delete', controller.deleteProduct);
// router.put('/products/update', controller.updateProduct);

module.exports = router;