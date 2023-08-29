const express = require('express');
const ChatController = require('../controllers/chat.controller');

const router = express.Router();

router.post('/', ChatController.create);
router.get('/', ChatController.findAll);
router.get('/:id', ChatController.findByPk);
router.put('/:id', ChatController.updateChat);

module.exports = router;