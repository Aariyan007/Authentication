const express = require('express');
const cors = require('cors');
const router = express.Router();
const { registerUser, test } = require('../controllers/authControllers');
const {loginUser}  = require('../controllers/authControllers')

router.use(
    cors({
        credentials : true,
        origin : 'http://localhost:5173'
    })
)

router.get('/',test);
router.post('/register',registerUser);
router.post('/login',loginUser);

module.exports = router