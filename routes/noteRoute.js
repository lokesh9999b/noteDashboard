const express = require('express');
const router = express.Router();
const noteController = require('../controllers/noteController');
const formController = require('../controllers/formController');

router.get('/getNotes', noteController.getNotes);

router.get('/form', formController.getForm);

module.exports = router;
