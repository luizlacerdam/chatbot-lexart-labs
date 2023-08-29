const chatService = require('../services/chat.service');

const create = async (req, res, next) => {
    try {
        const chat = req.body;

    const newChat = await chatService.create(chat);
    return res.status(201).json({ newChat });
    } catch (error) {
        next(error);
    }
};

const findAll = async (req, res, next) => {
    try {
       const allChats = await chatService.findAll();
       return res.status(200).json({ allChats });
    } catch (error) {
        next(error);
    }
};

const findByPk = async (req, res, next) => {
    try {
        const { id } = req.params; 
        const chat = await chatService.findByPk(id);
        return res.status(200).json({ chat });
    } catch (error) {
        next(error);
    }
};

const updateChat = async (req, res, next) => {
    try {
        const { id } = req.params;
        const chat = req.body;
        const chatUpdated = await chatService.updateChat(id, chat);
        return res.status(200).json({ chatUpdated });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    create,
    findAll,
    findByPk,
    updateChat,
};