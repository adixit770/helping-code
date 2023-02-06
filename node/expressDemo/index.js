const express=require("express");
const fs=require("fs");
const app=express();

// app.get("/get",(req,res)=>{
//     res.send("hello how are you")
// })
// app.listen(8000,()=>{
//     console.log("Server is Runing :http//localhost:8000");
// })
app.get("/",(req,res)=>{
    const data = fs.readFileSync("form.html","utf-8");
    res.send(data);
})
app.get("/submit",(req,res)=>{
 const {name}=req.query;
res.send(`${name}`)
})

app.listen(8000,()=>{console.log("server started");})