const dbconn = require('./dbConn');
const update = async()=>
{
    let data = await dbconn();
    let result =await data.update({name:'ccccc'},
    {
        $set:{name:"kratika",email:"kratika@gmail.com",mobile:"9329153518"}
    }
    );
    console.log("somesexfull");
}
update();
