const express = require('express');
require('./config');
const person= require('./contacts');
const app = express();

app.use(express.json());
app.post('/create',async(req,res)=>
{

let data = new person(req.body);
const result = await data.save();
res.send(result);
});
app.listen(440);

