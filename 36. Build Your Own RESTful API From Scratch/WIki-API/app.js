// jshint esversion:6
const express = require("express");
const bodyParse = require("body-parser");
const mongoose = require('mongoose');

const app = express();
app.set("view engine", "ejs");

app.use(bodyParse.urlencoded({extended:true}));
app.use(express.static("public"));

const url = "mongodb://localhost:27017/wikiDB";

main().catch(err => console.log(err));
async function main() {
    await mongoose.connect(url, { useNewUrlParser: true});
}

const articleSchema = {
    title: String,
    content: String
}
const Article = mongoose.model("Article", articleSchema);

app.get('/articles' , async (req , res)=>{
    let query = Article.find();
    let items = await query.exec();
    console.log("db.find(): \n" + items + "\n\n");
    res.send(items);
});
app.post('/articles' , async (req , res)=>{
    let newArticle = new Article({
        title: req.body.title,
        content: req.body.content
    });
    await newArticle.save();
});

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});