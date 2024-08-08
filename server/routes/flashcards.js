const express = require('express');
const path = require('path');

const router = express.Router();

const CLIENT_ROOT = path.resolve(__dirname, '../../apps/flashcards/build');

router.use(express.static(CLIENT_ROOT));
router.use('*', express.static(CLIENT_ROOT));

module.exports = router;