const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req, res) {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Winnipeg&appid=cdbbc9c6e2b482d21f3c811286c677d3";
    https.get(url, function(response) {
        console.log("statusCode: "+response.statusCode);
        console.log("headers: "+response.headers);
        response.on("data", (data)=>{
            const weatherData = JSON.parse(data);
            const object = {
                name: "Shawn",
                age: 23
            }
            console.log(JSON.stringify(object));
            console.log(weatherData.main.temp);
            const weatherDesciption = weatherData.weather[0].description;
            console.log(weatherDesciption);
        });
    });
    res.send("Server is up and running");
})

app.listen(3000, function(params) {
    console.log("Serve is running on port 3000...");
});