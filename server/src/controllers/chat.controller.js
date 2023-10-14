const chatService = require("../services/chat.service");

module.exports.getMessageByRoom = async (req, res) => {
  const { id } = req.params;

  const messages = await chatService.getMessageByRoom(res, id);

  return messages;
};
