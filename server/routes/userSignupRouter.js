const {Router} = require('express');
const router = Router();

const controller = require('../controllers/userSignupController');

router.post('/create', controller.Signup);
 router.post('/login', controller.checkUser);
 router.get("/logOut", controller.logOut);
module.exports = router;