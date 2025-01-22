
const express = require("express");
require('dotenv').config();
const app = express();
const mongo = require("./Mongo")
const User = require("./Message")
const cors = require("cors");
const path = require('path');

const Port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors())

const _dirname = path.resolve();

app.post("/message", async (req, res) => {


    try {

        if (req.body.name && req.body.email && req.body.number && req.body.message) {
            let users = new User(req.body);
            await users.save();

            return res.status(200).send({
                message: "Your Message Successfully Send.",
                success: true,
                users
            })

        } else {
            res.status(401).send({
                message: "Something is missing,please check!",
                success: false
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "Server error",
            success: false
        })
    }
})


app.use(express.static(path.join(_dirname, "/frontend/dist")));
app.get('*', (_, res) => {
    res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"));
})

app.listen(Port, () => {
    mongo();
    console.log(`server start port ${Port}`)
})