const express = require("express");
const roomController = require("../controllers/room.controller");
const {
  checkRoomIsExit,
  checkIsEmpty,
} = require("../middleware/room.middleware");

const roomRouter = express.Router();

// Định tuyến các HTTP request
roomRouter.post("/", checkIsEmpty, checkRoomIsExit, roomController.createRoom);
roomRouter.get("/list-room/:id", roomController.getListRoomByUserId);

module.exports = roomRouter;
