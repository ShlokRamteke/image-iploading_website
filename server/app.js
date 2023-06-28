const express = require("express");
const app=express();
const port=8004;






app.get("/", (req,res)=>{
    res.send("server start")
})



app.listen(port, ()=>{
    console.log("Server Started")
})