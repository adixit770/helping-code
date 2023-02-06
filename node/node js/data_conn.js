const MongoClient = require("mongodb").MongoClient
const url = "mongodb://localhost:27017";
const dbName = "contacts";
const client = new MongoClient(url);

const dbconn= async()=>
{
    let result =await client.connect();
    db=result.db(dbName);
    return db.collection("person_contact");
}
module.export=dbconn;
