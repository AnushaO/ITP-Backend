const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();
dotenv.config();
app.use(cors());

app.get("/", (req,res) => {
    res.send("success");
});

app.listen(5000, () => {
    console.log("server up and running in port 5000");
});
