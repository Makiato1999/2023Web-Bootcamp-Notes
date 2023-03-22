const { MongoClient } = require("mongodb");
const assert = require('assert');


// Replace the uri string with your connection string.
const uri = "mongodb://localhost:27017";
const dbName = "fruitsDB";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db(dbName);
    const coll = database.collection('fruits');

    const options = { ordered: true };

    let result = await coll.insertMany([
      { name: 'Apple', score: 8, reviews: 'Delicious' },
      { name: 'Peach', score: 6, reviews: 'Not bad' },
      { name: 'Orange', score: 3, reviews: 'Kind of sour' }
     ], options);
     
    console.log(`${result.insertedCount} documents were inserted`);

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);