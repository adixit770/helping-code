const {MongoClient} = require('mongodb');
const url = "mongodb://localhost:27017";
const dbName = "contacts";
const client = new MongoClient(url);

const getData = async()=>{
    let result = await client.connect();
    db = result.db(dbName);
    collection = db.collection('person_contact');
    let data = await collection.find({}).toArray();
console.log(data);
}
getData();