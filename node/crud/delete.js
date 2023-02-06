const dbconn = require('./dbConn');
const del = async()=>
{
    let data = await dbconn();
    let result =await data.deleteOne({name:'bbbbb'});
    console.log(result);
}
del();
