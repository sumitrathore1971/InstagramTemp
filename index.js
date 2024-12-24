const express = require("express");
const app = express();

app.set("view engine","ejs");

const port = 8080;

app.get("/ig/:username",(req,res)=>{
    let {username} = req.params;
    let name = username;
    const instaData = require("./data.json");
    const data = instaData[username];
    if(data){
        res.render("instagram.ejs",{ data });
    }else{
        res.render("error.ejs",{name});
    }
});


app.listen(port,()=>{
    console.log(`App is listening on port : ${port}`);
});