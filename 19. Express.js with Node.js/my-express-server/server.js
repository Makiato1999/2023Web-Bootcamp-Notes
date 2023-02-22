const express = require('express');
const app = express();

// home root
app.get("/", function (req, res) {
    //console.log(request);
    res.send("<h1>hello express<h1/>");
});

app.get("/contact", function (req, res) {
    //console.log(request);
    res.send("follow my GitHub");
});

app.get("/about", function (req, res) {
    //console.log(request);
    res.send("I am a full stack web developer");
});

app.listen(3000, function () {
    console.log("Server started on port 3000");
});