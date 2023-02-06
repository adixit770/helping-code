const express = require('express');
require('./config');
const person = require('./contacts');
const app = express();

app.use(express.json());
app.get('/list',async(req,res)=>
{

    //to search all.
// let data = await person.find({});

    //to search by name or any detail.
//let data = await person.find({name:"kratika2"});

     // to search by or.
// let data = await person.find({$or:[{name:'kratika2'},{age:'23'}]});

     ///to search by and
    // let data = await person.find({$and:[{name:'kratika2'},{email:"kratika2@gmail.com"}]});
 
     //to search by like
//let data = await person.find({name:/krat/});

      //to search by less then
//let data = await person.find({age:{$lt:'23'}});

   // to search by less then equel
   //let data = await person.find({age:{$lte:'22'}});

        //to search by greater than
        //let data = await person.find({age:{$gt:'22'}});

        //to search by greater than equal
        //let data = await person.find({age:{$gte:'22'}});   
        
          //to search by not
          //let data = await person.find({$nor:[{name:'kratika2'},{age:'23'}]});

          //to search by on
          let data = await person.find({age:{$in:['20','22']}});
// console.log(data);
res.send(data);
});
app.listen(8090);


