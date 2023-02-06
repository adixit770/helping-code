const express = require('express');
require('./config');
const person = require('./contacts');
const app = express();

app.use(express.json());
app.delete('/delete',async(req,res)=>
{

let data = await  person.deleteOne(req.body);
res.send(data);

});
app.listen(772);
