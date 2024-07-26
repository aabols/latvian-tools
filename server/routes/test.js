const express = require('express');

// CONTROLLERS
const { getTest } = require('../controllers/test');

// ROUTER
const router = express.Router();
router.get('/', getTest);

module.exports = router;