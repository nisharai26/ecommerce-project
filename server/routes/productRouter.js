const {Router} = require('express');
const router = Router();

const controller = require('../controllers/productController');

// router.get('/product/list',controller.searchProduct);
router.post('/product/create',controller.createProduct);
// router.delete('/product/delete',controller.deleteProduct);
// router.put('/product/update',controller.updateProduct);

module.exports = router;