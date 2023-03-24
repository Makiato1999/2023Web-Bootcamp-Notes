const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/fruitsDB', { useNewUrlParser: true});

  const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
  });
  const Fruit = mongoose.model("Fruit", fruitSchema);
  const fruit = new Fruit({
    name: "Apple",
    rating: 8,
    review: "Delicious"
  });
  await fruit.save();
  
  
  const personSchema = new mongoose.Schema({
    name: String,
    age: Number
  });
  const Person = mongoose.model("Person", personSchema);
  const person = new Person({
    name: "John",
    age: 27
  });
  await person.save();

  const kiwi = new Fruit({
    name: "Kiwi",
    rating: 3,
    review: "too sour"
  });
  const peach = new Fruit({
    name: "Peach",
    rating: 9,
    review: "sweet, soft, juicy as well"
  });
  const banana = new Fruit({
    name: "Banana",
    rating: 2,
    review: "it is sill green"
  });
  const fruits_arr = [kiwi, peach, banana];
  // since mongoose some query cannot accept callback function, so follow the below link
  // https://stackoverflow.com/questions/75586474/mongoose-stopped-accepting-callbacks-for-some-of-its-functions
  await Fruit.insertMany(fruits_arr);

  const find_res = await Fruit.find();
  find_res.forEach(fruit => {
    console.log(fruit);
    console.log(fruit.name);
  });

  mongoose.connection.close();
}






/*

const kiwi = new Fruit({
  name: "Kiwi",
  rating: 3,
  review: "too sour"
});
const peach = new Fruit({
  name: "Peach",
  rating: 9,
  review: "sweet, soft, juicy as well"
});
const banana = new Fruit({
  name: "Banana",
  rating: 2,
  review: "it is sill green"
});
const fruits_arr = [kiwi, peach, banana];


Fruit.insertMany(fruits_arr).then((res) =>{
  console.log("Successfully saved all the fruits to fruitsDB");
}).catch((err)=>{
  console.log(err);
});

Fruit.find().then((fruits)=>{
  console.log(fruits);
}).catch((err)=>{
  console.log(err);
});
*/
