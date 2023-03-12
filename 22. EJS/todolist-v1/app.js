// jshint esversion:6
const express = require("express");
const bodyParse = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParse.urlencoded({extended:true}));

var items = [
    "don't forget breakfast",
    "learn Udemy",
    "coffee time and take a nap"
];

app.get("/", (req, res)=>{
    var today = new Date();

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    var day = today.toLocaleDateString("en-US", options);

    res.render("list", {
        kindOfDay: day,
        newItems: items
    });
    // res.render("list", {kindOfDay: day});
});

app.post("/", (req, res)=>{
    let item = req.body.inputNewItem;
    items.push(item);

    res.redirect("/");
});

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});