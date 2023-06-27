const authService = require("../../services/auth.service");

const login = async (req, res) => {
    const bodyParams = req.body;
    res.send(await authService.login(bodyParams));
};
const signin = async (req, res) => {
    const bodyParams = req.body;
    res.send(await authService.signin(bodyParams));
};

module.exports = { login, signin };
