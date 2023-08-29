const { Chat } = require('../database/models');

const create = async (newChat) => Chat.create(newChat);

const findAll = async () => Chat.findAll();

const findByPk = async (id) => Chat.findByPk(id);

const updateChat = async (id, chat) => {
    const chatUpdated = await Chat.update(chat, {
        where: { id },
    });
    return chatUpdated;
};

module.exports = {
    create,
    findAll,
    findByPk,
    updateChat,
};