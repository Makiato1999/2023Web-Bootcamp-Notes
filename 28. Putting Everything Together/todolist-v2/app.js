// jshint esversion:6
const express = require("express");
const bodyParse = require("body-parser");
/* we temporarily don't consider the date in todolist-v1
const getDate = require("./date");
const date = require(__dirname+"/date.js");
let day = date.getDay();
*/
const mongoose = require("mongoose");
const app = express();

app.set("view engine", "ejs");
app.use(bodyParse.urlencoded({extended:true}));
app.use(express.static("public"));


// initialize the database
const itemSchema = new mongoose.Schema({
    item: String
});
const Item = mongoose.model("Item", itemSchema);
const item_1 = new Item({
    item: "write anything you would like to do"
});
const item_2 = new Item({
    item: "click on + button to add a new item"
});
const item_3 = new Item({
    item: "<-- click on this checkbox to delete the item"
});
const defaultitems = [item_1, item_2, item_3];
let items = [];
let workItems = [];

main().catch(err => console.log(err));
async function main() {
    try {
        await mongoose.connect('mongodb://localhost:27017/todolistDB', {useNewUrlParser: true});
        items = await Item.insertMany(defaultitems);
    } catch (error) {
        console.error(error);
    }
    console.log(items);

    try {
        await mongoose.connection.close();
        console.log('Mongoose connection closed.');
    } catch (error) {
        console.error('Error closing Mongoose connection:', error);
    }
}

app.get("/", (req, res)=>{
    res.render("list", {
        listTitle: "Today",
        newItems: items
    });
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