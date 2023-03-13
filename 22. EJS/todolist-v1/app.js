// jshint esversion:6
const express = require("express");
const bodyParse = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParse.urlencoded({extended:true}));
app.use(express.static("public"));

let items = [
    "don't forget breakfast",
    "learn Udemy",
    "coffee time and take a nap"
];

app.get("/", (req, res)=>{
    let today = new Date();

    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    let day = today.toLocaleDateString("en-US", options);

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