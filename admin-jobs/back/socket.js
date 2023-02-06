let io ;
module.exports={
init:server=>{
   io= require('socket.io')(server,{
    cors: {
      origin:"*",
      allowedHeaders: ["my-custom-header"],
      credentials: true
    }
  })
   return io
},
getIo:()=>{
    if(!io){
throw new Error('socket is not initialized');
    }
    return io;
}
}