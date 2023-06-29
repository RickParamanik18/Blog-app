const authService = require("../../services/auth.service");

const login = async (req, res) => {
    const { email, password } = req.headers;
    const response = await authService.login({ email, password });
    res.cookie("user", response.token);
    res.send(response);
};
const signin = async (req, res) => {
    const bodyParams = req.body;
    const params = { ...bodyParams, pic: req.file.filename };

    const response = await authService.signin(params);
    res.cookie("user", response.token);
    res.send(response);
};

module.exports = { login, signin };
