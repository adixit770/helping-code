
const dbconn = require('./dbConn');
const express = require('express');
const app = express();
app.use(express.json());

app.get('/showUsers',async(req,res)=>
{
    let data =  await dbconn();
    let result = await data.find({}).toArray();
    res.send(result);
    // let result = await data.find({name:'AMAN DIXIT'}).toArray();
   console.log(result);
})
app.listen(200);