//jshint esversion:6
/*
    initialize installation of packages
*/
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const _ = require('lodash');
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

/*
    initialize database collections(tables)
*/
const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";
const posts = [];
/*
    post structure
*/
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'please check your data entry, no title specified']
  },
  content: {
    type: String,
    required: [true, 'please check your data entry, no content specified']
  },
});
const Post = mongoose.model("Post", postSchema);

/*
    connect to database
*/
db_init().catch(err => console.log(err));
async function db_init() {
    try {
        await mongoose.connect('mongodb://localhost:27017/blogDB', {useNewUrlParser: true});
    } catch (error) {
        console.error(error);
    }
}

app.get("/", async (req, res)=>{
  try {
    let query = Post.find();
    let foundPosts = await query.exec();
    res.render("home", {
      homeStartingContent: homeStartingContent,
      foundPosts: foundPosts
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error in mongoose model api find()");
  }
});

app.get("/about", (req, res)=>{
  res.render("about", {
    aboutContent: aboutContent
  });
});

app.get("/contact", (req, res)=>{
  res.render("contact", {
    contactContent: contactContent
  });
});

app.get("/compose", (req, res)=>{
  res.render("compose");
});
app.post("/compose", async (req, res)=>{
  let newPost = new Post({
    title: req.body.postTitle,
    content: req.body.postContent
  });
  try {
    await newPost.save();
  } catch (error) {
    console.error(error);
    res.status(500).send("Error in mongoose model api save()");
  }
  res.redirect("/");
});

app.get("/posts/:postID", async (req, res)=>{
  try {
    let foundPost = await Post.findOne({ _id: req.params.postID });
    res.render("post", {
      post: foundPost
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error in mongoose model api findOne()");
  }
});


app.listen(3000, function() {
  console.log("Server started on port 3000");
});
