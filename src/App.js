const express=require('express')
const app=express();

app.get("/", (req,res)=>{
    res.send("hello form homeland");
});

app.get("/user/:userid",(req,res)=>{

    console.log(req.query)
     console.log(req.params)
    res.send({
        firstname:"Utkarsh",
        lastname:"Shrestha"
    })
})

app.post("/user",(req,res)=>{
    res.send("Date sucessfully saved to database");
})

app.delete("/user",(req,res)=>{
    res.send("Data deleted secussfully");
})

app.get("/about",(req,res)=>{
    res.send("Hello from the server");
});

app.listen(7777,()=>{
    console.log("Server is sucessfully listening on port 3000");
});