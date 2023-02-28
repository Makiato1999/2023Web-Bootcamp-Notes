const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req, res) {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Winnipeg&appid=cdbbc9c6e2b482d21f3c811286c677d3";
    https.get(url, function(response) {
        console.log(response);
    });
    res.send("Server is up and running");
})

app.listen(3000, function(params) {
    console.log("Serve is running on port 3000...");
});