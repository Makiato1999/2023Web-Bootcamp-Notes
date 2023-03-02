const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
/*
app.get("/", function(req, res) {
    const query = "Winnipeg";
    const APIkey = "cdbbc9c6e2b482d21f3c811286c677d3";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+APIkey;
    https.get(url, function(response) {
        console.log("statusCode: "+response.statusCode);
        console.log("headers: "+response.headers);
        response.on("data", (data)=>{
            const weatherData = JSON.parse(data);
            
            //const object = {
            //    name: "Shawn",
            //    age: 23
            //}
            //console.log(JSON.stringify(object));
            
            const temp = weatherData.main.temp;
            const weatherDesciption = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageURL = "http://openweathermap.org/img/wn/"+icon+"@2x.png";
            console.log(weatherDesciption);
            res.write("<p>The weather description is "+weatherDesciption+"</p>");
            res.write("<h1>The temperature in Winnipeg is "+temp+"</h1>");
            res.write("<img src='"+imageURL+"'>");
            res.send();
        });
    });
    //res.send("Server is up and running");
})
*/

app.get("/", function(req, res) {
    res.sendFile(__dirname+"/index.html");
});

app.post("/", (req, res)=>{
    console.log("post successfully");
    const query = req.body.cityName;
    const APIkey = "cdbbc9c6e2b482d21f3c811286c677d3";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+APIkey+"&units="+unit;
    https.get(url, (response)=>{
        response.on("data", (data)=>{
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDesciption = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageURL = "http://openweathermap.org/img/wn/"+icon+"@2x.png";
            res.write("<p>The weather description is "+weatherDesciption+"</p>");
            res.write("<h1>The temperature in "+query+" is "+temp+"</h1>");
            res.write("<img src='"+imageURL+"'>");
            res.write("<style>body {background-color: rgb(81, 132, 149);} h1 {color: white;} p {color: white;}</style>");
            res.send();
        });
    });
});

app.listen(3000, function(params) {
    console.log("Serve is running on port 3000...");
});