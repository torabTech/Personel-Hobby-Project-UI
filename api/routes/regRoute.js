const express = require('express');
const router = express.Router();

const controller = require('../controller/regCTRL');


router.route('/')
    .get(controller.getAll)
    .post(controller.addOne)


router.route('/:id')
    .delete(controller.deleteOne);
   

module.exports = router;