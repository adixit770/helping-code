
const dbconn = require('./dbConn');
const insert = async()=>
{
    let data =  await dbconn();
    // let result = await data.insert(
    //     {name:'chanchal',email:'chanchal@sdfghnm.com',mobile:'11111111111' }
    // );
    //for insert more the one data then
    let result = await data.insertMany(
        [
             {name:'aaaaa',email:'aaaaa@sdfghnm.com',mobile:'222222222' },
             {name:'bbbbb',email:'bbbbb@sdfghnm.com',mobile:'333333333' },
             {name:'ccccc',email:'ccccc@sdfghnm.com',mobile:'444444444' }
        ]);
if(result.acknowledged)
{
    console.log("success");
}
else
{
     console.log("failed")
}

}
insert();