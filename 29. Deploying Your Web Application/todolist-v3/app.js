// jshint esversion:6
const express = require("express");
const bodyParse = require("body-parser");
const _ = require('lodash');
const mongoose = require("mongoose");
const app = express();

app.set("view engine", "ejs");
app.use(bodyParse.urlencoded({extended:true}));
app.use(express.static("public"));


/*
    initialize database collections(tables)
*/
/*
    item structure
*/
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
const defaultItems = [item_1, item_2, item_3];
/*
    list structure
*/
const listSchema = new mongoose.Schema({
    name: String,
    items: [itemSchema]
});
const List = mongoose.model("List", listSchema);


/*
    connect to database
*/
db_init().catch(err => console.log(err));
async function db_init() {
    try {
        await mongoose.connect('mongodb+srv://admin-shawn:shawn990610@cluster0.whfip5e.mongodb.net/todolistDB', {useNewUrlParser: true});
    } catch (error) {
        console.error(error);
    }
}
/*
    default url route, default page if list is default 
*/
app.get("/", async (req, res)=>{
    let query = Item.find();
    let items = await query.exec();
    console.log("db.find(): \n" + items + "\n\n");
    if (items.length === 0) {
        // if database is empty, insert default items
        await Item.insertMany(defaultItems);
        res.redirect("/");
    } else {
        res.render("list", {
            listTitle: "Today",
            newItems: items
        });
    }
});
/*
    add new item in current list
*/
app.post("/", async (req, res)=>{
    // input can not be empty
    let itemContent = req.body.inputNewItem;
    let listCategory = req.body.list;
    console.log("listCategory: "+listCategory);

    if (itemContent !== '') {
        let newItem = new Item({
            item: itemContent
        });
        
        if (listCategory === 'Today') {
            await newItem.save();
            res.redirect('/');
        } else {
            let foundList = await List.findOne({ name: listCategory}).exec();
            console.log(foundList.items);
            await foundList.items.push(newItem);
            await foundList.save();
            res.redirect('/'+listCategory);
        }
    }
});
/*
    delete one item in list
*/
app.post("/delete", async (req, res)=>{
    let item_id = req.body.selectedItem;
    let listCategory = req.body.listCategory;
    try {
        if (listCategory === "Today") {
            await Item.findByIdAndDelete(item_id); 
            res.redirect('/');
        } else {
            let list = await List.findOneAndUpdate(
                {name: listCategory}, 
                {$pull: {items: {_id: item_id}}},
                {new: true}
            );
            await list.save();
            res.redirect('/'+listCategory);
        }
    } catch (error) {
        console.error(err);
        res.status(500).send("Error inserting default items into database.");
    }
});
/*
    present items of current list
*/
app.get("/:listCategory", async (req, res)=>{
    const listCategory = _.capitalize(req.params.listCategory);
    // find if the database name has existed
    try {
        let foundList = await List.findOne({ name: listCategory}).exec();
        if (foundList === null) {
            // create a new list
            console.log("This database doesn't exist, we create it right now!");
            const list = new List({
                name: listCategory,
                items: defaultItems
            });
            await list.save();
            res.redirect('/'+listCategory);
        } else {
            // show this existing list
            console.log("This database exists!");
            console.log(foundList);
            res.render("list", {
                listTitle: foundList.name,
                newItems: foundList.items
            });
        }
    } catch (error) {
        console.error(err);
        res.status(500).send("Error in mongoose model api findOne()");
    }
});


/*
    open local server with port 3000
*/
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port, ()=>{
    console.log("Server is running on port 3000");
});