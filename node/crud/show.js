const dbconn = require('./dbConn');
const showData = async()=>
{
    let data =  await dbconn();
    let result = await data.find({}).toArray();
    // let result = await data.find({name:'AMAN DIXIT'}).toArray();
    console.log(result);
}
showData();