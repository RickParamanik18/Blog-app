const express = require("express");
const router = express.Router();
const multer = require("multer");
const authController = require("../controllers/auth.controller");
const paramsChecker = require("../../middlewares/paramsChecker");

const upload = multer({
    dest: "./uploads",
});

router.get("/login", paramsChecker("email", "password"), authController.login);
router.post(
    "/signin",
    upload.single("pic"),
    paramsChecker("name", "email", "password"),
    authController.signin
);

module.exports = router;
