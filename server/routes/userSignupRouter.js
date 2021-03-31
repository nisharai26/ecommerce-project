const {Router} = require('express');
const router = Router();

const controller = require('../controllers/userSignupController');

router.post('/create', controller.Signup);
 router.post('/login', controller.checkUser);
module.exports = router;