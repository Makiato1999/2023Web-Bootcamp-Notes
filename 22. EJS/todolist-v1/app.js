// jshint esversion:6
const express = require("express");
const bodyParse = require("body-parser");
const getDate = require("./date");
// import module
const date = require(__dirname+"/date.js");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParse.urlencoded({extended:true}));
app.use(express.static("public"));

let items = [
    "don't forget breakfast",
    "learn Udemy",
    "coffee time and take a nap"
];
let workItems = [];

app.get("/", (req, res)=>{
    /* put this part into data.js
    let today = new Date();

    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    let day = today.toLocaleDateString("en-US", options);
    */
    //let day = getDate();
    let day = date.getDay();

    res.render("list", {
        listTitle: day,
        newItems: items
    });
    // res.render("list", {kindOfDay: day});
});

app.post("/", (req, res)=>{
    console.log(req.body);
    let item = req.body.inputNewItem;
    if (req.body.list === "Work List") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }
});

app.get("/work", (req, res)=>{
    res.render("list", {
        listTitle: "Work List",
        newItems: workItems
    });
});

/* 
app.post("/work", (req, res)=>{
    let workItem = req.body.inputNewItem;
    workItems.push(workItem);

    res.redirect("/work");
});
*/

app.get("/about", (req, res)=>{
    res.render("about");
});

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});