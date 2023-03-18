# The Complete 2023 Web Development Bootcamp
_provided by Dr. Angela Yu on Udemy platform_
#### Table of Contents
1. [Advanced Javascript and DOM Manipulation](#anchor_13)<br/>
2. [jQuery](#anchor_14)<br/>
3. [Node.js](#anchor_18)<br/>
4. [Express.js with Node.js](#anchor_19)<br/>
5. [API](#anchor_20)<br/>
6. [Version Control](#anchor_21)<br/>
7. [EJS (Embedded JavaScript)](#anchor_22)<br/>
8. [Blog Website](#anchor_23)<br/>
9. [Database](#anchor_24)<br/>
9. [SQL](#anchor_25)<br/>
## Advanced Javascript and DOM Manipulation<a name="anchor_13"></a>
1. difference between  callback function and normal function
   - callback function is passed as an argument to another function and is invoked by that function at a later point in time
   - normal function, on the other hand, is invoked directly by its name and can return a value or modify the state of the program in some way
   - callback function is typically used when you want to perform some action after a certain event has occurred, such as when an asynchronous operation (like a database query or an HTTP request) completes. You can pass a callback function to the asynchronous function, and it will be called when the operation finishes. This is often referred to as "callback-based programming."
   - callback function example:
     ```
     function fetchData(callback) {
     // Asynchronous operation, like fetching data from a server
     // ...
     let data = { id: 1, name: "John" };
         callback(data);
     }

     function processData(data) {
         console.log("Received data:", data);
     }

     fetchData(processData); // Outputs: "Received data: { id: 1, name: 'John' }"
     ```
2. anonymous functions are often used when you need to pass a function as an argument to another function, like in the case of a callback function
   - example
     ```
     function add(a, b, callback) {
         let result = a + b;
         callback(result);
     }

     add(2, 3, function(result) {
         console.log(result);
     });
     ```
3. document.querySelector()
   -  select the first element within a document that matches a specified CSS selector. If you want to select all elements that match a selector, you can use querySelectorAll() instead.
## jQuery<a name="anchor_14"></a>
1. download jQuery by searching 'jQuery', then find 'Using jQuery with a CDN'
   ```
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
   ```
2. remove class in jQuery
   ```
   $('#myElement').removeClass('myClass');
   ```
   remove class in JS
   ```
   let element = document.getElementById('myElement');
   element.classList.remove('myClass');
   ```
3. pressed(keyboard/mouse click) animate, 100ms
   ```
   function animatePress(key) {
      let id = "#"+key;
      $(id).addClass("pressed");
      setTimeout(() => {
         $(id).removeClass("pressed");
      }, 100);
   }
   ```
## Node.js<a name="anchor_18"></a>
1. NPM (node package manager)
   ```
   xiexiaoran@wpa-6-563 18. Node.js % npm init
   This utility will walk you through creating a package.json file.
   It only covers the most common items, and tries to guess sensible defaults.

   See `npm help init` for definitive documentation on these fields
   and exactly what they do.

   Use `npm install <pkg>` afterwards to install a package and
   save it as a dependency in the package.json file.

   Press ^C at any time to quit.
   package name: (18.-node) 
   version: (1.0.0) 
   description: This a intro to node project.
   entry point: (index.js) 
   test command: 
   git repository: 
   keywords: 
   author: Shawn Xie
   license: (ISC) 
   About to write to /Users/xiexiaoran/Documents/GitHub/note-2023Web-Bootcamp/18. Node.js/package.json:

   {
      "name": "18.-node",
      "version": "1.0.0",
      "description": "This a intro to node project.",
      "main": "index.js",
      "scripts": {
         "test": "echo \"Error: no test specified\" && exit 1"
      },
      "author": "Shawn Xie",
      "license": "ISC"
   }


   Is this OK? (yes) yes
   ```
2. package.json
3. my node js installation pathway
   - find the path
     ```
     which node
     ```
   - unintall node js by
     ```
     sudo rm -rf /usr/local/{bin/{node,npm},lib/node_modules/npm,lib/node,share/man/*/node.*}
     ```
## Express.js with Node.js<a name="anchor_19"></a>
1. how to initilize project and install express.js
   - firstly, create the package and js file, such as ```mkdir my-express-server```, then ```touch server.js```
   - then 
     ```
     xiexiaoran@wpa-6-563 my-express-server % npm init
     This utility will walk you through creating a package.json file.
     It only covers the most common items, and tries to guess sensible defaults.

     See `npm help init` for definitive documentation on these fields
     and exactly what they do.

     Use `npm install <pkg>` afterwards to install a package and
     save it as a dependency in the package.json file.

     Press ^C at any time to quit.
     package name: (my-express-server) 
     version: (1.0.0) 
     description: My first express server.
     entry point: (server.js) 
     test command: 
     git repository: 
     keywords: 
     author: Shawn Xie
     license: (ISC) 
     About to write to /Users/xiexiaoran/my-express-server/package.json:

     {
         "name": "my-express-server",
         "version": "1.0.0",
         "description": "My first express server.",
         "main": "server.js",
         "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1",
            "start": "node server.js"
         },
         "author": "Shawn Xie",
         "license": "ISC"
     }


     Is this OK? (yes) yes
     ```
   - then install express by ```npm install express```
   - after compelting above commands, the package will be updated
2. parse response body
   - install package ```npm install body-parser```
   - when we parese the request by ```request.body.name1```, the ```.name1``` which is bound to the name tag in corresponded html, such as ```<input type="text" name="input1" placeholder="first input">```
3. issues
   - when i put ```<script src="calculator.js" charset="UTF-8"></script>``` in home(root) html, i got error ```Refused to execute script from 'http://localhost:3000/calculator.js' because its MIME type ('text/html') is not executable, and strict MIME type checking is enabled.```, fixed by deleting this line since we already linked js on server 
## API<a name="anchor_20"></a>
1. tools
   - JSON view pro, google extension
   - Postman, good for url
2. parse JSON by http
   - example, more API details plz access [open weather](https://openweathermap.org/current)
     ```
     const express = require("express");
     const https = require("https");
     const app = express();

     app.get("/", function(req, res) {
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
            });
            res.send("Server is up and running");
         })；
     })；
     ```
3. Newsletter
   - deal with static folder
      ```
      const app = express();
      app.use(express.static("public"));
      ```
   - html input in form should have name
      ```
      <form action="/" method="post">
         <label id="cityInput">City name: </label>
         <input id="cityInput" type="text" name="cityName">
         <button type="submit">Submit</button>
      </form>
      ```
   - since this site is hard to explore(for my views XD)
      - how to find [API key](https://us21.admin.mailchimp.com/account/api/)
         - once API key is exposed, this current API key will be revoked
      - how to find [unique id](https://us21.admin.mailchimp.com/lists/settings/defaults?id=7793)
      - how to find [url](https://mailchimp.com/developer/marketing/docs/fundamentals/#connecting-to-the-api)
4. server: Heroku
   - how to install
      - follow by this [instruction](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up)
      - issue
         - homebrew version is too old?
            ```
            ==> Installing heroku from heroku/brew
            Error: Your Command Line Tools are too outdated.
            Update them from Software Update in System Preferences.
            ```
         - fix it by this [instruction](https://coady.tech/macos-command-line-tools-outdated/)
            ```
            sudo rm -rf /Library/Developer/CommandLineTools 
            sudo xcode-select --install 
            ```
      - issue
         - I deleted docker recently, and i guess there are still some remaining files or problems
            ```
            Error: Permission denied @ apply2files - /usr/local/lib/docker/cli-plugins
            ```
         - fix it by this [instruction](https://flaviocopes.com/homebrew-fix-permission-denied-apply2files/)
            ```
            mkdir -p /Applications/Docker.app/Contents/Resources/cli-plugins

            brew cleanup
            ```
   - login, create app, define a Procfile
      - first ```heroku login```, verify passwords
      - then create app by ```heroku create```
      - define a Procfile, follow the [instruction](https://devcenter.heroku.com/articles/getting-started-with-nodejs#define-a-procfile)
         - create a file called ```Procfile``` on root directory
         - write ```web: npm start``` in Procfile
   - deploy the app 
      - before initializing heroku, checking the local git repositery first
         - since i create this app in a folder on my desktop, i initialize the git repositery by ```git init```, then use ```git add .``` and ```git commit -m "update pic and title"```
      - then push to heroku server
         ```git push heroku master```
      - logs, more details can be found on heroku documentations
## Version Control<a name="anchor_21"></a>
1. use ```git log``` to check all commits
2. commands
   - working directory --```git add .```-> staging area
      - add all files in staging area
   - working directory <--```git rm --cached -r .```-- staging area
      - remove all files in staging area
   - staging area --```git commit -m "any message"```--> local repository
      - commit all files in staging area to local repository
   - staging area <--```git checkout filename```-- local repository
      - restore, roll back to last commit results
3. what is ".gitignore"
   - .gitignore is a file used by the version control system Git to specify which files and directories should be excluded from version control. It allows you to specify patterns for files and directories that you want Git to ignore when you add, commit, or push changes to a repository.
4. branch
   - create new branch by ```git branch branchName```
   - check current branch by ```git branch```
   - switch branch by ```git checkout branchName```
   - merge branch, first switch to the branch you won't keep, then ```git merge anotherBranchName```
5. forking and pull request
   - A fork B repository, A is only avalibale to update A local forked repository, if A want to update B repository, A needs to create pull request
   - B can review the pull request which other programmers created, and B has access and B can make decision
## EJS (Embedded JavaScript)<a name="anchor_22"></a>
1. [documentation](https://ejs.co/)
2. control flow, ```<% %>``` for each line in .ejs file
   ```
   <% if (kindOfDay === 6 || kindOfDay === 0) { %>
        <h1 style="color: rgb(227, 126, 160);">Today is <%= kindOfDay %></h1>
   <% } else {%>
        <h1 style="color: rgb(48, 202, 223);">Today is <%= kindOfDay %></h1>
   <% }%>
   ```
2. Layouts
   - example for list.ejs
   ```
   <%- include('header'); -%>
   <h1>
      Title
   </h1>
   <p>
      My webpage
   </p>
   <%- include('footer'); -%>
   ```
3. how to determine the type of form and redirect
   - in list.ejs, button name is list, value is listTitle
   ```
   <form class="item" action="/" method="POST">
      <input type="text" name="inputNewItem" placeholder="New Item" autocomplete="off">
      <button type="submit" name="list" value="<%= listTitle %>" >+</button>
   </form>
   ```
   - in app.js, we can parse the request body to get the result of the button submission, and we can compare ```req.body.list``` with the current listTitle to find the direction we need to redirect
   ```
   app.post("/", (req, res)=>{
      console.log(req.body);
      let item = req.body.inputNewItem;
      if (req.body.list === "Work List") {
         workItems.push(item);
         res.redirect("/work");
      } else {
         items.push(item);
         res.redirect("/");
      }
   });
   ```
4. module
   - in date.js, how to export
     ```
     module.exports.getDate = getDate;

     function getDate() {
         let day = new Date();
         return day;
     }
     ```
     - since module.exports is object, therefore you can have access to its attributes, such as ```module.exports.getDate```
     - we use ```getDate``` instead of ```getDate()``` because we don't need to execute the function right now
   - in app.js, how to invoke date.js module
     ```
     const date = require(__dirname+"/date.js");

     ...

     let day = date.getDay();
     ```
     - as we said above, the current date is an object, which has an attribute named getDay, and we run the function by ```getDay()```
   - refactor
     - nodejs module ```exports``` [instruction](https://www.geeksforgeeks.org/node-js-modules/)
5. const
   - When you declare a variable with the const keyword, you are indicating that the variable is a constant and that its value cannot be reassigned. However, when you declare an array or a list using const, you are declaring that the variable itself cannot be reassigned to a new array or list, but you can still modify the elements within the array.
## Blog Website<a name="anchor_23"></a>
1. tips
   - sometimes we will only download the package.json (we will not upload all packages to remote repository since packages could take up too much storage) from remote repository, such as
      ```
      {
         "name": "ejs-challenge",
         "version": "1.0.0",
         "description": "",
         "main": "app.js",
         "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1"
         },
         "author": "",
         "license": "ISC",
         "dependencies": {
            "body-parser": "^1.18.3",
            "ejs": "^2.6.1",
            "express": "^4.16.3",
            "lodash": "^4.17.11"
         }  
      }
      ```
      - thereby, the first step we need to do after cloning the repository is ```npm install```
2. navigation bar
   - good to use bootstrap specific class
3. Route parameters
   - more details in [documentation](https://expressjs.com/en/guide/routing.html)
   - example
      ```
      Route path: /users/:userId/books/:bookId
      Request URL: http://localhost:3000/users/34/books/8989
      req.params: { "userId": "34", "bookId": "8989" }
      ```
      - l think it is simmilar to regular expression?
4. lowerCase
   - install package "lodash"
      ```
      var _ = require('lodash');
      ...
      let requestedTitle = _.lowerCase(req.params.postName);
      ```
## Database<a name="anchor_24"></a>
1. difference between MySQL and MongoDB
   | MySQL | MongoDB |
   |----------|----------|
   | more mature | shiny and new |
   | table structure | document structure |
   | requires a schema | more flexible to changes |
   | great with relationships | not great with complex relationships |
   | scales vertically | horizontally scalable |
## SQL<a name="anchor_25"></a>
1. 
