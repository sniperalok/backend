// step one basically import fs module
const fs= require("fs");
const http =require("http");

//step 2 file read karna h data kaun sa h

const data = fs.readFileSync(`${__dirname}/data.json`,"utf-8");
 
//step 3 let's create server

const server= http.createServer((req,res)=>{
    //step that showing we are currently on which path
    const pathName= req.url;
    // this is showing that api has been created
    if(pathName=="/api"){
//this will tell data in the form of the json data
res.writeHead(200,{
    "content-type" : "application/json"
})
res.end(data);
    } //for the error handling
    else{
        res.writeHead(404,{
    "content-type" : "text/html"
})
res.end("<h2>page doesn't find </h2>")
}
})
server.listen(8000,"127.0.0.1");