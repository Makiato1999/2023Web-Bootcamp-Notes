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

app.route('/articles')
.get(async (req , res)=>{
    let query = Article.find();
    let items = await query.exec();
    console.log("db.find(): \n" + items + "\n\n");
    res.send(items);
})
.post(async (req , res)=>{
    let newArticle = new Article({
        title: req.body.title,
        content: req.body.content
    });
    try {
        await newArticle.save();
        res.send("Successfully added a new article.")
    } catch (error) {
        res.send(error);
        console.error(error);
    }
})
.delete(async (req, res)=>{
    try {
        await Article.deleteMany();
        res.send("Successfully deleted all articles.")
    } catch (error) {
        res.send(error);
    }
});
/*
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
    try {
        await newArticle.save();
        res.send("Successfully added a new article.")
    } catch (error) {
        res.send(error);
        console.error(error);
    }
});
app.delete('/articles', async (req, res)=>{
    try {
        await Article.deleteMany();
        res.send("Successfully deleted all articles.")
    } catch (error) {
        res.send(error);
    }
});
*/

app.route('/articles/:articleTitle')
.get(async (req , res)=>{
    let query = Article.findOne({title: req.params.articleTitle});
    try {
        let item = await query.exec();
        console.log("db.findOne(): \n" + item + "\n\n");
        res.send(item);
    } catch (error) {
        res.send(error);
    }
})
.put(async (req , res)=>{
    try {
        await Article.updateOne(
            {title: req.params.articleTitle},
            {title: req.body.title, content: req.body.content}
        );
        res.send("Successfully put the article.")
    } catch (error) {
        res.send(error);
    }
})// put will update whole/entire object
.patch(async (req , res)=>{
    try {
        await Article.updateOne(
            {title: req.params.articleTitle},
            // {title: req.body.title, content: req.body.content}
            {$set: req.body}
        );
        res.send("Successfully patch the article field.")
    } catch (error) {
        res.send(error);
    }
})// patch only update the specific field in the object
.delete(async (req , res)=>{
    try {
        await Article.deleteOne(
            {title: req.params.articleTitle}
        );
        res.send("Successfully delete the specific article field.")
    } catch (error) {
        res.send(error);
    }
});


app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});