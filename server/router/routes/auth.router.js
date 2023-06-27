const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");
const paramsChecker = require("../../middlewares/paramsChecker");

router.get("/login", paramsChecker("email", "password"), authController.login);
router.post(
    "/signin",
    paramsChecker("name", "email", "password", "pic"),
    authController.signin
);

module.exports = router;
