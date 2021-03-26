const {Router} = require('express');
const router = Router();

const controller = require('../controllers/accountController');

router.get('/',controller.searchCustomer);


router.post('/',controller.createInfo);
router.delete('/',controller.deleteInfo);
router.put('/',controller.updateInfo);

module.exports = router;