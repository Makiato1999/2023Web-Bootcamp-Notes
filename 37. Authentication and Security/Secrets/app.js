//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');
const encrypt = require("mongoose-encryption");

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
//var secret = process.env.SOME_LONG_UNGUESSABLE_STRING;
var secret = "Thisisanewpresentation";
// Encrypt Only Certain Fields
userSchema.plugin(encrypt, { secret: secret, encryptedFields: ["password"]});


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
app.post("/register", async(req, res)=>{
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
});
app.post("/login", async(req, res)=>{

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
});

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});