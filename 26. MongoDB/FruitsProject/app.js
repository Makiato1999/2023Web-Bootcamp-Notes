const { MongoClient } = require("mongodb");


// Replace the uri string with your connection string.
const uri = "mongodb://localhost:27017";
const dbName = "fruitsDB";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db(dbName);
    const coll = database.collection('fruits');

    const query_1 = [
      { name: 'Apple', score: 8, review: 'Delicious' },
      { name: 'Peach', score: 6, review: 'Not bad' },
      { name: 'Orange', score: 3, review: 'Kind of sour' }
    ];
    const result = await coll.insertMany(query_1);
     
    console.log(`${result.insertedCount} documents were inserted`);

    // query for fruits that have a score more than 5
    const query_2 = { score: { $gt: 5 } };
    const options_2 = {
      // Include only the `name` and `review` fields in each returned document
      projection: { _id: 0, name: 1, review: 1 },
    };
    const cursor = coll.find(query_2, options_2);

    // print a message if no documents were found
    if ((await coll.countDocuments(query_2)) === 0) {
      console.log("No documents found!");
    }
    // replace console.dir with your callback to access individual elements
    await cursor.forEach(console.dir);

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);