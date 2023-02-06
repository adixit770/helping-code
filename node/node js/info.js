const http = require('http');
http.createServer((req,res)=>{
 if (req.url=='/') {
     res.writeHeader(200,{'content-Type':'text/html'});
     res.write("hello this is test");
     res.end();
 }
    else if(req.url=='/info') {
        res.writeHeader(200,{'content-Type':'text/html'});
        res.write("hello this is test 123");
        res.end();
 }
}).listen(5005,'127.0.0.1');