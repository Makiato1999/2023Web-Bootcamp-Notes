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
let workItems = [];

db_init().catch(err => console.log(err));
async function db_init() {
    try {
        await mongoose.connect('mongodb://localhost:27017/todolistDB', {useNewUrlParser: true});
    } catch (error) {
        console.error(error);
    }
    /*
    try {
        await mongoose.connection.close();
        console.log('Mongoose connection closed.');
    } catch (error) {
        console.error('Error closing Mongoose connection:', error);
    }
    */
}

app.get("/", async (req, res)=>{
    let query = Item.find();
    let items = await query.exec();
    console.log("db.find(): \n" + items + "\n\n");
    if (items.length === 0) {
        // if database is empty, insert default items
        await Item.insertMany(defaultitems);
        res.redirect("/");
    } else {
        res.render("list", {
            listTitle: "Today",
            newItems: items
        });
    }
});

app.post("/", async (req, res)=>{
    let newItem = new Item({
        item: req.body.inputNewItem
    });
    await newItem.save();
    res.redirect('/');
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