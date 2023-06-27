const authRepository = require(".././repositories/auth.repository");
const jwt = require("jsonwebtoken");

const login = async (params) => {
    const { password } = params;

    const result = await authRepository.login(params);
    console.log(result)
    if (result && result.password === password)
        return {
            status: 1,
            msg: "login successful",
            token: jwt.sign({data:result}, process.env.SECRET),
        };
    else
        return {
            status: 0,
            msg: "login failed",
        };
};
const signin = async (params) => {
    if (await authRepository.login(params))
        return {
            status: 0,
            msg: "this email is already registered",
        };

    const result = await authRepository.signin(params);

    return Object.keys(result).length
        ? {
              status: 1,
              msg: "Success",
              token: jwt.sign({data:result}, process.env.SECRET),
          }
        : {
              status: 0,
              msg: "Failed",
          };
};
module.exports = { login, signin };
