var express = require("express");
var router = express.Router();

// Require controller modules.
var auth_controller = require('../controllers/app/auth.controller');

router.post('/register', auth_controller.register_user);
router.post('/login', auth_controller.login_user);

module.exports = router;