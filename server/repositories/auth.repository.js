const users = require("../models/user.model");

const login = async (params) => {
    const { email } = params;
    return await users.findOne({ email });
};

const signin = async (params) => {
    const { email, password, name, pic } = params;

    const newuser = new users({
        email,
        password,
        name,
        pic,
        blogs: [],
    });

    return await newuser.save();
};

module.exports = { login, signin };
