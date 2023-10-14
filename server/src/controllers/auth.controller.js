const { json } = require("body-parser");
const authService = require("../services/auth.service");

module.exports.register = async (req, res) => {
  try {
    const response = await authService.register(req.body);
    return res.status(201).json(response);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports.login = async (req, res) => {
  try {
    const response = await authService.login(res, req.body);
    return response;
  } catch (error) {
    return res.status(500).json(error);
  }
};
