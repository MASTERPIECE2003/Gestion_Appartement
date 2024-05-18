const express = require('express');
const router = express.Router();
const appartementController = require('../controllers/appartementController');

router.get('/', appartementController.getAllAppartements);
router.post('/', appartementController.addAppartement);
router.put('/:numApp', appartementController.updateAppartement);
router.delete('/:numApp', appartementController.deleteAppartement);

module.exports = router;
