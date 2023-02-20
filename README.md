# The Complete 2023 Web Development Bootcamp
_provided by Meta & Coursera_
#### Table of Contents
1. [Advanced Javascript and DOM Manipulation](#anchor_13)<br/>
2. [jQuery](#anchor_14)<br/>
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
3. 
