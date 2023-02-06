const express = require ('express');
const app = express();
app.set('view engine','ejs');
app.get('/profile',(req,res)=>{
    const users ={
        'Name':'Aman Dixit',
        'Email':'Adixit770@gmail.com',
        'Skill':['php','html','css','js']
    };
    res.render('profile',{users});
})
app.get('/login',(_,res)=>{
    res.render('node')
});
app.get('',(req,res)=>{
    res.send("this is home page");
});
app.listen(5000);