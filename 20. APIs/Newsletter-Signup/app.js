//jshint extension: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/signup.html");
});

app.post("/", (req, res)=>{
    console.log(req.body); 
    var lastName = req.body.lastName;
    var firstName = req.body.firstName;
    var email = req.body.email;
    
    // transfer js object to JSON
    var data = {
        members:[
            {
                email_address:email,
                status:"subscribed",
                merge_fields:{
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };
    var jsonData = JSON.stringify(data);

    // more details you should read mailchimp api document for list reference
    const url = "https://us21.api.mailchimp.com/3.0/lists/4f95bf79ea";
    const options = {
        method:"POST",
        // since once the api key is revealed, it will be revoked
        // so you need to get a new api key if you want to make this app run 
        // api key
        // for example: auth:"shawn:APIkey"
        auth:"shawn:a6d9cb558953b721152aba2e75939836-us21"
    };

    const request = https.request(url, options, (response)=>{
        // console.log(response);
        if (response.statusCode === 200) {
            res.sendFile(__dirname+"/success.html");
        } else {
            res.sendFile(__dirname+"/failure.html");
        }
        response.on("data", (data)=>{
            console.log(JSON.parse(data));
        });
    });

    request.write(jsonData);
    request.end();
});

app.post("/failure.html", (req, res)=>{
    res.redirect("/");
});

app.listen(process.env.PORT || 3000, ()=>{
    console.log("Server is running on port 3000");
});
/* local host
app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});*/

// API key
// get a new one if u want to make this app run
// unique id for Shawn
// 4f95bf79ea