const express = require('express');
const router = express.Router();

const todoController = require('../controllers/todoControllers');

router.post('/create',todoController.create);

module.exports = router;