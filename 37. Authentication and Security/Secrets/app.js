//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');
// ********** hash and crypt part ***********
/*
require('dotenv').config();
const encrypt = require("mongoose-encryption");
const bcrypt = require('bcrypt');
const saltRounds = 10;
*/
// ********** *********** *********** ***********


// ********** cookie and session part ***********
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
// ********** *********** *********** ***********


const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));

// ********** cookie and session part ***********
app.use(session({
    secret: "Our litte secret",
    resave: false,
    saveUninitialized: true,
}))
app.use(passport.initialize());
app.use(passport.session());
// ********** *********** *********** ***********
const url = "mongodb://localhost:27017/userDB";
mongoose.connect(url, { useNewUrlParser: true});

const userSchema = new mongoose.Schema({
    email: String,
    password: String
});

// ********** cookie and session part ***********
userSchema.plugin(passportLocalMongoose);
// ********** *********** *********** ***********

// ********** hash and crypt part ***********
/* var secret = process.env.SOME_LONG_UNGUESSABLE_STRING;
Encrypt Only Certain Fields
userSchema.plugin(encrypt, { secret: process.env.SECRET, encryptedFields: ["password"]});
*/
// ********** *********** *********** ***********

const User = mongoose.model("User", userSchema);

// ********** cookie and session part ***********
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
// ********** *********** *********** ***********

app.get("/", async(req, res)=>{
    res.render("home");
});
app.get("/login", async(req, res)=>{
    res.render("login");
});
app.get("/register", async(req, res)=>{
    res.render("register");
});
app.post("/register", (req, res)=>{
    // ********** cookie and session part ***********
    User.register({username: req.body.username}, req.body.password, function(err, user) {
        if (err) {
            console.log(err);
            res.redirect("/register");
        } else {
            passport.authenticate("local")(req, res, function() {
                res.redirect("/secrets");
            });
        }
    });
    // ********** *********** *********** ***********
    // ********** hash and crypt part ***********
    /*
    // check test2 in database
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
    */
   // ********** *********** *********** ***********
});
// ********** cookie and session part ***********
app.get("/secrets", (req, res)=>{
    if (req.isAuthenticated()) {
        res.render("secrets");
    } else {
        res.redirect("/login");
    }
});
app.get("/logout", (req, res)=>{
    req.logout();
    res.redirect("/");
});
// ********** *********** *********** ***********

app.post("/login", (req, res)=>{
    // ********** cookie and session part ***********
    const user = new User({
        email: req.body.username,
        password: req.body.password
    });
    req.login( user, function(err) {
        if (err) {
            console.log(err);
        } else {
            passport.authenticate("local")(req, res, function() {
                res.redirect("/secrets");
            });
        }
    });
    // ********** *********** *********** ***********

    // ********** hash and crypt part ***********
    /*
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
    */
    // ********** *********** *********** ***********
});
// ********** cookie and session part ***********
passport.serializeUser(function(user, done) {
    done(null, user);
});
passport.deserializeUser(function(user, done) {
    done(null, user);
});
// ********** *********** *********** ***********
app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});