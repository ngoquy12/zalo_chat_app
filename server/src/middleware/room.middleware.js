const roomService = require("../services/room.service");

module.exports.checkRoomIsExit = async (req, res, next) => {
  const { RoomName } = req.body;

  const result = await roomService.findRoomByName(RoomName);

  if (result) {
    return res.status(400).json({
      status: 400,
      message: "Tên phòng đã tồn tại.",
    });
  }

  next();
};

module.exports.checkIsEmpty = async (req, res, next) => {
  const { RoomName } = req.body;

  if (!RoomName) {
    return res.status(400).json({
      status: 400,
      message: "Tên phòng không được để trống.",
    });
  }

  next();
};
