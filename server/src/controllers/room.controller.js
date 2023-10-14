const roomService = require("../services/room.service");

module.exports.createRoom = async (req, res) => {
  const { RoomName, CreatedByUserId } = req.body;

  const result = await roomService.createRoom(res, RoomName, CreatedByUserId);

  return result;
};

module.exports.getListRoomByUserId = async (req, res) => {
  const { id } = req.params;

  const result = await roomService.getListRoomByUserId(res, id);

  return result;
};
