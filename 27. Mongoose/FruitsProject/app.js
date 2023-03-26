const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/fruitsDB', { useNewUrlParser: true});

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
  const Fruit = mongoose.model("Fruit", fruitSchema);
  const fruit = new Fruit({
    name: "Apple",
    rating: 8,
    review: "Delicious"
  });
  // create fruits collection(database) and insert Apple document(table)
  //await fruit.save();
  
  
  const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
  });
  const Person = mongoose.model("Person", personSchema);
  const person = new Person({
    name: "John",
    age: 27
  });
  // create people collection(database) and insert John document(table)
  //await person.save();

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
  // insert many fruits
  //await Fruit.insertMany(fruits_arr);


  // relationship
  const grape = new Fruit({
    name: "Grape",
    rating: 7,
    review: "i will buy them again, pretty good"
  });
  //await grape.save();

  const amy = new Person({
    name: "Amy",
    age: 24,
    favouriteFruit: grape
  });
  //await amy.save();
  // one more practice
  const mango = new Fruit({
    name: "Mango",
    rating: 7,
    review: "A taste of the tropics"
  });
  await mango.save();
  await Person.updateOne({name: 'John'}, {favouriteFruit: mango})




  const find_res = await Fruit.find();
  // show all documents
  find_res.forEach(fruit => {
    console.log(fruit.name+":");
    console.log(fruit);
  });

  /* update one fruit name
  await Fruit.updateOne({
    _id: '641fec26a1261ebe990df8c7'
  }, { 
    name: 'Pineapple' 
  });
  */

  /*
  await Fruit.deleteOne({
    _id: '641fec26a1261ebe990df8c7'
  }, { 
    name: 'Pineapple' 
  });
  */

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
