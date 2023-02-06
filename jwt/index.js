const mongoose=require('mongoose');
const express=require('express');
const getConnection=require('./connection');
require('dotenv').config()
const route = require('./routes')
const app=express();
app.use(express.json())
app.use("/api", route);
getConnection();
app.listen(process.env.PORT, () => {
  console.log("server started");
});