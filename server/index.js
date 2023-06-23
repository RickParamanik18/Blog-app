const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const router = require("./router/router");

app.use(express.json());
app.use('/api',router)

app.listen(process.env.PORT, console.log(`LISTENING TO PORT ${process.env.PORT}`));

app.get('/',(req,res)=>{
    res.send("response from blog-app server")
})