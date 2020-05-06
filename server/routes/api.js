var express = require("express");
var router = express.Router();

// Require controller modules.
var auth_controller = require('../controllers/app/auth.controller');

/* GET home page. */
router.post('/register', auth_controller.register_user);

module.exports = router;