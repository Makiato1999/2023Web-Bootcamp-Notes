# The Complete 2023 Web Development Bootcamp
_provided by Meta & Coursera_
#### Table of Contents
1. [Advanced Javascript and DOM Manipulation](#anchor_13)<br/>
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
2. xxx
