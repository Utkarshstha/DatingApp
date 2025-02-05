const express=require('express')
const app=express();

app.get("/", (req,res)=>{
    res.send("hello form homeland");
});

app.get("/about",(req,res)=>{
    res.send("Hello from the server");
});

app.listen(7777,()=>{
    console.log("Server is sucessfully listening on port 3000");
});