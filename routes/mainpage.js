
const express = require('express');



const mainpageController = require('../controllers/mainpage');


const router = express.Router();


router.get('/sign-up',mainpageController.gethomePage);
router.get('',mainpageController.geterrorPage)

module.exports = router;

