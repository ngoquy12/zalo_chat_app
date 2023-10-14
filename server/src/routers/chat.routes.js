const express = require("express");
const chatController = require("../controllers/chat.controller");

const chatRouter = express.Router();

chatRouter.get("/room/:id", chatController.getMessageByRoom);

module.exports = chatRouter;
