const {Router} = require('express');
const router = Router();

const controller = require('../controllers/userSignupController');

router.post('/create', controller.Signup);
module.exports = router;