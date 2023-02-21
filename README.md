# The Complete 2023 Web Development Bootcamp
_provided by Meta & Coursera_
#### Table of Contents
1. [Advanced Javascript and DOM Manipulation](#anchor_13)<br/>
2. [jQuery](#anchor_14)<br/>
3. [Node.js](#anchor_18)<br/>
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
4. sss
