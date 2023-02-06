
const dbconn = require('./dbConn');
const express = require('express');
const app = express();
app.use(express.json());

app.get('/updateUsers',async(req,res)=>
{
    let data =  await dbconn();
    let result = await data.update({name:'aman'},
        {
            $set:{name:'hardik',email:'hardik@gmail.com'} 
        });
        res.send(result);
    // let result = await data.find({name:'AMAN DIXIT'}).toArray();
   console.log(result);
})
app.listen(300);