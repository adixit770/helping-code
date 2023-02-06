
const dbconn = require('./dbConn');
const express = require('express');
const app = express();
app.use(express.json());

app.get('/insertUsers',async(req,res)=>
{
    let data =  await dbconn();
    let result = await data.insertMany(
        [
            {name:'aman dixit',email:'adixit770@gmail.com',mobile:'9039826882'},
            {name:'piyushi',email:'piyushi@gmail.com',mobile:'9039826882'},
            {name:'kratika',email:'kratika@gmail.com',mobile:'9039826882'},
            {name:'anchal',email:'anchal770@gmail.com',mobile:'9039826882'}
        ]
    );
    res.send(result);
    // let result = await data.find({name:'AMAN DIXIT'}).toArray();
   console.log(result);
})
app.listen(1200);