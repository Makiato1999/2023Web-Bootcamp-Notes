//jshint esversion:6
require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');
const encrypt = require("mongoose-encryption");
const bcrypt = require('bcrypt');
const saltRounds = 10;

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));


const url = "mongodb://localhost:27017/userDB";
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect(url, { useNewUrlParser: true});
}

const userSchema = new mongoose.Schema({
    email: String,
    password: String
});
// var secret = process.env.SOME_LONG_UNGUESSABLE_STRING;
// Encrypt Only Certain Fields
// userSchema.plugin(encrypt, { secret: process.env.SECRET, encryptedFields: ["password"]});


const User = mongoose.model("User", userSchema);

app.get("/", async(req, res)=>{
    res.render("home");
});
app.get("/login", async(req, res)=>{
    res.render("login");
});
app.get("/register", async(req, res)=>{
    res.render("register");
});
app.post("/register", (req, res)=>{// check test2 in database
    const plaintextPassword = req.body.password;
    bcrypt.hash(plaintextPassword, saltRounds, async function(err, hash) {
        // Store hash in your password DB.
        const newUser = new User({
            email: req.body.username,
            password: hash
        });
        try {
            await newUser.save();
            res.render("secrets");
            console.log("Successfully registered a new user.");
        } catch (error) {
            res.send(error);
            console.error(error);
        }
    });
    /*
    const newUser = new User({
        email: req.body.username,
        password: req.body.password
    });
    try {
        await newUser.save();
        res.render("secrets");
        console.log("Successfully registered a new user.");
    } catch (error) {
        res.send(error);
        console.error(error);
    }
    */
});
app.post("/login", async(req, res)=>{
    try {
        const query = User.findOne({email: req.body.username});
        let item = await query.exec();
        console.log("db.findOne(): \n" + item + "\n\n");
        if (item) {
            bcrypt.compare(req.body.password, item.password, function(err, result) {
                // result == true
                if (result === true) {
                    res.render("secrets");
                }
            });
        }
    } catch (error) {
        res.send(error);
    }

    /*
    const query = User.findOne({email: req.body.username});
    try {
        let item = await query.exec();
        console.log("db.findOne(): \n" + item + "\n\n");
        if (item) {
            if (item.password === req.body.password) {
                res.render("secrets");
            }
        }
    } catch (error) {
        res.send(error);
    }
    */
});

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});