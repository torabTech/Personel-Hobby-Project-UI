const express = require('express');
const router = express.Router();

const controller = require('../controller/shopingController');

router.route('/')
    .get(controller.getAll)
    .post(controller.addOne)


router.route('/:id')
    .get(controller.getOne)
    .delete(controller.deleteOne)
    .put(controller.updateOne);
    



module.exports = router;