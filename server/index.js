const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
dotenv.config();
const router = require("./router/router");

const upload = multer({
    dest: "./uploads",
});

app.use(express.json());
app.use(express.static(__dirname + "/uploads")); //serving uploads folder as static directory
app.use(
    cors({
        origin: true,
        credentials: true,
    })
);
app.use("/api", router);

app.listen(
    process.env.PORT,
    console.log(`LISTENING TO PORT ${process.env.PORT}`)
);

app.get("/", (req, res) => {
    res.send("response from blog-app server");
});

app.post("/file-upload", upload.single("file"), (req, res) => {
    res.send(res.file ? "file uploaded" : "upload error");
});
