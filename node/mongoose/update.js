const express = require('express');
require('./config');
const person = require('./contacts');
const app = express();

app.use(express.json());
app.put('/update',async(req,res)=>
{

let data = await person.updateOne(req.params,
    {$set:req.body}
    );
res.send(data);

});
app.listen(2100);
