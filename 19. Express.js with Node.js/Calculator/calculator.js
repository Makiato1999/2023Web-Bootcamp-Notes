const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res) {
   console.log(__dirname);
   res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
    console.log(req.body);
    let input1 = Number(req.body.input1);
    let input2 = Number(req.body.input2);
    let submit = input1+input2;
    res.send("Result is : "+submit);
});

app.listen(3000, function () {
    console.log("Server started on port 3000");
});