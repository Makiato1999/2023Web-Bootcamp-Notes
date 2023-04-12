# The Complete 2023 Web Development Bootcamp
_provided by Dr. Angela Yu on Udemy platform_ <br><br>
<img height="50" src="https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png">
<img height="50" src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png">
<img height="50" src="https://user-images.githubusercontent.com/25181517/183898054-b3d693d4-dafb-4808-a509-bab54cf5de34.png">
<img height="50" src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png">
<img height="50" src="https://user-images.githubusercontent.com/25181517/121401671-49102800-c959-11eb-9f6f-74d49a5e1774.png">
<img height="50" src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png">
<img height="50" src="https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png">
<img height="50" src="https://user-images.githubusercontent.com/25181517/182884177-d48a8579-2cd0-447a-b9a6-ffc7cb02560e.png">
<img height="50" src="https://user-images.githubusercontent.com/25181517/192107858-fe19f043-c502-4009-8c47-476fc89718ad.png">
<img height="50" src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png">
<img height="50" src="https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png">
<br>
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
9. [MongoDB](#anchor_26)<br/>
	- [installation by homebrew (mac with intel processor)](#anchor_26_1)<br/>
	- [mongodb shell (mongosh)](#anchor_26_2)<br/>
	- [connect to mongodb](#anchor_26_3)<br/>
9. [Mongoose](#anchor_27)<br/>
	- [CRUD](#anchor_27_1)<br/>
9. [Deploying Your Web Application](#anchor_29)<br/>
	- [MongoDB Atlas admin](#anchor_29_1)<br/>
	- [connect to MongoDB Atlas](#anchor_29_2)<br/>
	- [deploy application on Heroku](#anchor_29_3)<br/>
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
1. sqlite online [playground](https://sqliteonline.com/)
2. CURD, simple demonstration
   - create
      ```
      CREATE TABLE customers (
	      id TNT NOT null,
         first_name STRING,
         last_name STRING,
         address STRING,
         PRIMARY KEY (id)
      );

      CREATE TABLE products (
	      id TNT NOT null,
         name STRING,
         price MONEY,
         PRIMARY KEY (id)
      );
      ```
   - insert
      ```
      INSERT INTO customers
      VALUES (1, "Linda", "Song", "1200 priza st")

      INSERT INTO customers
      VALUES (2, "James", "Lee", "300 romat st")

      INSERT INTO products (id, name)
      VALUES (2, "Wendy")

      INSERT INTO products (id, name, price)
      VALUES (1, "James", 100)

      INSERT INTO products
      VALUES (3, "Ryan", 23)
      ```
   - select
      ```
      SELECT * FROM products WHERE id=1
      ```
   - update
      ```
      UPDATE products
      SET price = 80, stock=22
      WHERE id = 2

      UPDATE products
      SET name="Chess", price = 20, stock=45
      WHERE id = 1
      ```
   - delete
      ```
      DELETE FROM products
      WHERE id=3
      ```
3. foreign key
   - create
      ```
      CREATE TABLE orders (
         id INT NOT NULL,
         order_number INT,
         customer_id INT,
         product_id INT,
         PRIMARY KEY (id),
         FOREIGN KEY (customer_id) REFERENCES customers(id),
         FOREIGN KEY (product_id) REFERENCES products(id)
      );
      ```
   - join (inner join), more details in w3school 
      ```
      INSERT INTO orders
      VALUES (1, 1, 2, 1)

      INSERT INTO orders
      VALUES (2, 2, 2, 1)
      ```
      ```
      SELECT orders.order_number, customers.first_name, customers.last_name, customers.address
      FROM orders
      INNER JOIN customers
      ON orders.customer_id = customers.id;
      ```
4. left join, right join, ...
## MongoDB<a name="anchor_26"></a>
##### install mongoDB community edition
1. Install by ```.tgz Tarball```, but there are still too many left issues which i cannot handle, so i recommand the next installation way by homebrew. This is the [download](https://www.mongodb.com/try/download/community) and [documentation](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x-tarball/)
      ```
      sudo mv '/Users/xiexiaoran/Desktop/mongodb-macos-x86_64-6.0.5' /usr/local/mongodb
      ```
    - update shell resource file
      - check shell version by ```echo $0```
      - if you are bash, follow this [link](https://blog.londonappbrewery.com/how-to-download-install-mongodb-on-mac-2895ccd2b5c1), also, bash can follow the offical documentation which i have put the link above
      - if you are zsh as well, create/open ```~/.zshrc```, input the path
      ```
      export PATH="/usr/local/mongodb/bin:$PATH"
      ```
      - then update the shell by ```source ~/.zshrc```
    - since mac OS has updated, we can't use the default path (```/data/db```) for saving data, so need to create new path and folder, more details needs to follow the [documentation]()
      ```
      sudo mkdir -p /usr/local/var/mongodb
      sudo mkdir -p /usr/local/var/log/mongodb
      
      sudo chown xiexiaoran /usr/local/var/mongodb
      sudo chown xiexiaoran /usr/local/var/log/mongodb
      
      open /usr/local/var/
      ```
      	- so data will be saved in ```/usr/local/var/mongodb```
    - then check mongodb by ```mongod --version```, i don't know why i can't use ```mongo --version``` 
    - open the mongodb by ```mongod```, then check if it runs successfully by ```ps aux | grep -v grep | grep mongod```
    - still have many issues
2.  <a name="anchor_26_1"></a>Install by homebrew. I recommand this way, since my Mac is an intel processor and OS version is above 10, so i meet too many issues when i install mongodb by ```.tgz Tarball```. All commands are followed by the offical [documentation (using homebrew)](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/).
    - first install xcode, Homebrew requires the Xcode command-line tools from Apple's Xcode
      ```
      xcode-select --install
      ```
    - download the official Homebrew formula for MongoDB and the Database Tools
      ```
      brew tap mongodb/brew
      ```
    - update Homebrew and check it out
      ```
      brew update
      ```
    - installation will create the following files and directories at the location specified below
      |  | Intel Processor | M1 Processor |
      |----------|----------|----------|
      | configuration file | /usr/local/etc/mongod.conf | /opt/homebrew/etc/mongod.conf |
      | log directory | /usr/local/var/log/mongodb | /opt/homebrew/var/log/mongodb |
      | data directory | /usr/local/var/mongodb | /opt/homebrew/var/mongodb |
    - run MongoDB Community Edition
    	- To run MongoDB (i.e. the mongod process) as a macOS service
      		```
      		brew services start mongodb-community@6.0
      		brew services stop mongodb-community@6.0
      		```
      	- To run MongoDB (i.e. the mongod process) manually as a background process
      	 	```
      		mongod --config /usr/local/etc/mongod.conf --fork
      		```
   - connect and use MongoDB
     ```
     mongosh
     ```
##### mongoDB <a name="anchor_26_2"></a>
1. [shell](https://www.mongodb.com/docs/mongodb-shell/) operations
   - document
   	in MongoDB, documents are represented as JavaScript objects (JSON-like) with key-value pairs
   - create, insert document
     ```
     use shopDB
     
     db.products.insertOne({_id: 1, name: "Pen", price: 1.20})
     db.products.insertOne({_id: 2, name: "Pencil", price: 0.80})
     ```
   - query
     ```
     db.products.find()
     
     // (query, projections)
     db.products.find({_id: 1}, {name: 1, price: true})
     // 1 is true, 0 is false
     db.products.find({_id: {$gt: 1}}, {name: 1, price: true})
     db.products.find({_id: {$gt: 1}}, {name: 1, _id: 0})
     ```
   - update
     ```
     db.products.updateOne({_id: 1}, {$set: {stock: 32}})
     db.products.updateOne({_id: 2}, {$set: {stock: 12}})
     ```
   - delete
     ```
     db.products.deleteOne({_id: 1})
     ```
   - more
     ```
     // insert new row
     db.products.insert(
     	{
        	_id: 3,
        	name: "Cupcake",
        	price: 1.30,
        	stock: 43,
        	reviews: [
            	{
                	authorName: "Andrew",
                	rating: 5,
                	review: "it sounds good"
            	},
            	{
                	authorName: "Shawn",
                	rating: 2,
                	review: "kind of salty, not recommend"
            	}
        	]
     	}
     )
     ```
2. connect to mongodb<a name="anchor_26_3"></a>
	- run server by ```mongod --config /usr/local/etc/mongod.conf``` since we don't have ```/data/db```
	  ```
	  xiexiaoran@wifi-wpa-cw-140-193-232-58 FruitsProject % mongod --config /usr/local/etc/mongod.conf
		
	  < tips: nothing is here >
	  ```
		- my installation path is listed in the above table, but i will list them below again in case i am confused in the future
			1. configuration file: ```/usr/local/etc/mongod.conf```
			2. log directory: ```/usr/local/var/log/mongodb```
			3. data directory: ```/usr/local/var/mongodb```
		- then we can open another terminal and check server processes status by ```ps aux | grep mongod```
		  ```
		  xiexiaoran@wpa-6-974 FruitsProject % ps aux | grep mongod
		  xiexiaoran       27438   0.6  0.7 35982372  59388 s000  S+    5:35pm   0:01.36 mongod --config /usr/local/etc/mongod.conf
		  xiexiaoran       27444   0.0  0.0 33598032    608 s001  S+    5:36pm   0:00.01 grep mongod
		  ```
			- kill process by ```kill pid```
	- in nodejs
		- connect it locally by url ```mongodb://localhost:<port>```, local server port on my device is 27017, [documentation](https://www.mongodb.com/docs/drivers/node/current/fundamentals/connection/connect/#std-label-node-other-ways-to-connect)
			- use ```mongod --dbpath /usr/local/var/mongodb```, which can check the server port, such as
			  ```
			  ...
			  
			  {"t":{"$date":"2023-03-22T17:51:38.198-05:00"},"s":"I",  "c":"NETWORK",  "id":23015,   "ctx":"listener","msg":"Listening on","attr":{"address":"/tmp/mongodb-27017.sock"}}
			  {"t":{"$date":"2023-03-22T17:51:38.198-05:00"},"s":"I",  "c":"NETWORK",  "id":23015,   "ctx":"listener","msg":"Listening on","attr":{"address":"127.0.0.1"}}
			  {"t":{"$date":"2023-03-22T17:51:38.198-05:00"},"s":"I",  "c":"NETWORK",  "id":23016,   "ctx":"listener","msg":"Waiting for connections","attr":{"port":27017,"ssl":"off"}}
			  ```
		- then we can create backend application such as app.js, then run it by ```node app.js```, [documentation](https://www.mongodb.com/docs/drivers/node/current/quick-start/connect-to-mongodb/), MongoDB operations can be find here as well, [documentation](https://www.mongodb.com/docs/drivers/node/current/usage-examples/)
		- after create collection and insert documents, we can check the local data storage whether saved the data
			- by ```mongosh```, we can then ```show dbs``` to retrieve all databases, such as
			  ```
			  test> show dbs
			  admin     40.00 KiB
			  config    48.00 KiB
			  fruitsDB   8.00 KiB
			  local     72.00 KiB
		   	  shopDB    72.00 KiB
			  ```
		- after using find in database, we can have outputs like
		  ```
		  xiexiaoran@wpa-6-974 FruitsProject % node app.js
		  3 documents were inserted
		  { name: 'Apple', review: 'Delicious' }
		  { name: 'Peach', review: 'Not bad' }
		  ```
## mongoose <a name="anchor_27"></a>
1. installalation
   - simple, install by ```npm i mongoose```
2. issues
   - since there are different versions (version has updated recently), such as query functions can't acccept callback function
      ```
      xiexiaoran@wpa-6-382 FruitsProject % node app.js
      /Users/xiexiaoran/Documents/GitHub/2023Web-Bootcamp-Notes/27. Mongoose/FruitsProject/node_modules/mongoose/lib/model.js:2966
      		throw new MongooseError('Model.insertMany() no longer accepts a callback');
          	^
		MongooseError: Model.insertMany() no longer accepts a callback 
		at Function.insertMany (/Users/xiexiaoran/Documents/GitHub/2023Web-Bootcamp-Notes/27. Mongoose/FruitsProject/node_modules/mongoose/lib/model.js:2966:11)
		at main (/Users/xiexiaoran/Documents/GitHub/2023Web-Bootcamp-Notes/27. Mongoose/FruitsProject/app.js:49:9)
		at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
      Node.js v18.14.2
      ```
      - deal with by using  ```await```, more practical details on this [link](https://stackoverflow.com/questions/75586474/mongoose-stopped-accepting-callbacks-for-some-of-its-functions) or read the newest [documentation](https://mongoosejs.com/docs/api/model.html) of mongoose
      - since we need to use await, so make sure to wrap this code in an ```async``` function
3. build-in validators
   - [validation](https://mongoosejs.com/docs/validation.html)
   - required
      - it is similar to exception?
      ```
      const fruitSchema = new mongoose.Schema({
         name: {
            type: String,
            required: [true, 'please check your data entry, no name specified']
         },
         rating: {
            type: Number,
            min: 1,
            max: 10
         },
         review: String
      });
      ```
      - when I forget the fruit name on purpose, the program reports an error
      ```
      xiexiaoran@wpa-6-382 FruitsProject % node app.js
      Error: Fruit validation failed: name: please check your data entry, no name specified 
         at ValidationError.inspect (/Users/xiexiaoran/Documents/GitHub/2023Web-Bootcamp-Notes/27. Mongoose/FruitsProject/node_modules/mongoose/lib/error/validation.js:50:26)
      ```
4. CRUD<a name="anchor_27_1"></a>
   - create and read are simple, as we showed in code
   - [update](https://mongoosejs.com/docs/api/model.html#Model.updateOne()), there is no good example, and new version mongoose doesn't support callback function as its parameter (especially in 'options')
   - delete
   - relationship
      - update the schema
         ```
         ...
         const personSchema = new mongoose.Schema({
            name: String,
            age: Number,
            favouriteFruit: fruitSchema
         });
         ```
      - update the document
         ```
         ...
         const amy = new Person({
            name: "Amy",
            age: 24,
            favouriteFruit: grape
         });
         await amy.save();
         ```
      - results
         ```
         {
            _id: ObjectId("641ff45fcab8dbeeb7900682"),
            name: 'Amy',
            age: 24,
            favouriteFruit: {
               name: 'Grape',
               rating: 7,
               review: 'i will buy them again, pretty good',
               _id: ObjectId("641ff45fcab8dbeeb7900680"),
               __v: 0
            },
            __v: 0
         }
         ```
5. I use async in this project since the newest mongoose(version 7.0.3) didn't accept call back function any more, but if your version is old(version 5.13.16), call back function is still working well, more details on mongoose [documentation](https://mongoosejs.com/docs/api/model.html)
   - there is an example for different version in todolist-v2
   - version 5.13.16, with call back function
      ```
      app.get("/", function(req, res) {
         Item.find({}, function(err, items) {
            if (err) {
                  console.error(err);
                  res.status(500).send("Error retrieving items from database.");
            } else {
                  console.log("db.find(): \n" + items + "\n\n");
                  if (items.length === 0) {
                     // if database is empty, insert default items
                     Item.insertMany(defaultitems, function(err) {
                        if (err) {
                              console.error(err);
                              res.status(500).send("Error inserting default items into database.");
                        } else {
                              res.redirect("/");
                        }
                     });
                  } else {
                     res.render("list", {
                        listTitle: "Today",
                        newItems: items
                     });
                  }
               }
            });
      });

      ```
   - version 7.0.3, with async function, this is more intuitive
      ```
      app.get("/", async (req, res)=>{
         let query = Item.find();
         let items = await query.exec();
         console.log("db.find(): \n" + items + "\n\n");
         if (items.length === 0) {
            // if database is empty, insert default items
            await Item.insertMany(defaultitems);
            res.redirect("/");
         } else {
            res.render("list", {
                  listTitle: "Today",
                  newItems: items
            });
         }
      });
      ```
6. What is the difference between findByIdAndRemove and findByIdAndDelete in mongoose?
   - pretty hilarious [explanation](https://stackoverflow.com/questions/54081114/what-is-the-difference-between-findbyidandremove-and-findbyidanddelete-in-mongoo)
7. delete element in list
   - How to remove array element in mongodb? [follow this](https://stackoverflow.com/questions/16959099/how-to-remove-array-element-in-mongodb)
   	```
	Model.findOneAndUpdate()
	```
## Deploying Your Web Application<a name="anchor_29"></a>
1. MongoDB Atlas admin<a name="anchor_29_1"></a>
	```
	Username: admin-shawn
	Password: shawn990610
	```
2. connect to MongoDB Atlas<a name="anchor_29_2"></a>
	- go to ```network access``` to set the perimission to all ip address
   	- go to ```database```, then click on ```connect```, choose ```connect your application```
   		- copy the ```mongodb+srv://admin-shawn:<password>@cluster0.whfip5e.mongodb.net/?retryWrites=true&w=majority``` to your app.js and update it
		- i use ```mongodb+srv://admin-shawn:<password>@cluster0.whfip5e.mongodb.net/``` here, not sure about that
   	- if it works, and you would like to run it on local server, just run ```node app.js```, but you don't need to connect to local database anymore
3. deploy application on Heroku<a name="anchor_29_3"></a>
	- since i put all codebases on github, so my local git is on this repository
		- which is ```/Users/xiexiaoran/Documents/GitHub/2023Web-Bootcamp-Notes/```
		- but i only want to push the ```/Users/xiexiaoran/Documents/GitHub/2023Web-Bootcamp-Notes/29. Deploying Your Web Application/todolist-v3``` to the heroku server, how can i make it?
	- first, i create a new local repository(folder), i name it as ```GitHub-localhost```, and i put all code into it
		- so current my pathway is ```/Users/xiexiaoran/Documents/GitHub-localhost/2023Web-Bootcamp-Notes/29. Deploying Your Web Application/todolist-v3```
	- then i create the git by ```git init```, and i get the master branch on the above pathway, and this is my original repository location
	- afterthat, use ```heroku create ``` to create the application on heroku
	  ```
	  xiexiaoran@MacBook-Pro todolist-v3 % heroku create 
 	  ›   Warning: heroku update available from 7.68.2 to 7.68.3.
	  Creating app... done, ⬢ floating-brushlands-29395
	  https://floating-brushlands-29395.herokuapp.com/ | https://git.heroku.com/floating-brushlands-29395.git
	  ```
	  we can use the left link to access our application later
	- and then we need to create the remote repository
		- use ```heroku git:remote -a floating-brushlands-29395```, the name(```floating-brushlands-29395```) is provided by the heroku create command
		- use ```git remote -v``` to check the remote repository location
	- so far, we have the original and remote repository, next step is pushing whole codebase on the server
		- use ```git add .``` to collect all updates
		- use ```git commit -m ""``` to commit updates to stage
		- since the original branch is called master, we use ```git push heroku master``` to push whole codebase
		  ```
		  xiexiaoran@MacBook-Pro todolist-v3 % git push heroku master           
			Enumerating objects: 5, done.
			Counting objects: 100% (5/5), done.
			Delta compression using up to 8 threads
			Compressing objects: 100% (3/3), done.
			Writing objects: 100% (3/3), 323 bytes | 323.00 KiB/s, done.
			Total 3 (delta 2), reused 0 (delta 0), pack-reused 0
			remote: Updated 13 paths from bb056be
			remote: Compressing source files... done.
			remote: Building source:
			remote: 
			remote: -----> Building on the Heroku-22 stack
			remote: -----> Using buildpack: heroku/nodejs
			...
			remote: -----> Build succeeded!
			remote: -----> Discovering process types
			remote:        Procfile declares types -> web
			remote: 
			remote: -----> Compressing...
			remote:        Done: 46.2M
			remote: -----> Launching...
			remote:        Released v5
			remote:        https://immense-tor-46027.herokuapp.com/ deployed to Heroku
			remote: 
			remote: Verifying deploy... done.
			To https://git.heroku.com/immense-tor-46027.git
   				9382885..2b1c935  master -> master
		  ```
	- access the application by the link which heroku provides, here example is ```https://immense-tor-46027.herokuapp.com/```
4. sss
