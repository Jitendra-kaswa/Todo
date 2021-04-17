const express = require('express');
const router = express.Router();

const todoController = require('../controllers/todoControllers');

router.post('/create',todoController.create);
router.get('/delete/:id',todoController.delete);
router.get('/update/:id',todoController.update);

module.exports = router;