const dbconn = require('./dbConn');
const express = require('express');
const app = express();
app.use(express.json());
app.get('/deleteUsers',async(req,res)=>
{
    let data = await dbconn();
    let result = await data.deleteMany(
   { name:{$in:["aman dixit","hardik"]}}
    );
    res.send(result);
console.log(result);
});
app.listen(900);