const express = require('express');
const router = express.Router();

const controller = require('../controller/itemCTRL');
const specsController = require('../controller/itemSpecsCTRL')

router.route('/')
    .get(controller.getAll)
    .post(controller.addOne)


router.route('/:id')
    .get(controller.getOne)
    .delete(controller.deleteOne)
    .put(controller.updateOne);

router.route('/:id/specs')
    .get(specsController.getAll)
    .post(specsController.addOne)
    .delete(specsController.deleteOne)
    .put(specsController.updateOne);

router.route('/search/:value').get(controller.getByName);
    

module.exports = router;