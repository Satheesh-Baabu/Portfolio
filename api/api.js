const express = require("express");
const cors = require('cors')
const mongoose = require('mongoose')
const model = require("./models/model")

const app  = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://satheeshbaabum:oOb9OOWDZojhDBqv@sample.pkoy7.mongodb.net/?retryWrites=true&w=majority&appName=sample")
.then(()=>{console.log("db connected")})
.catch(()=>{console.log("someting thappa pota")})


app.post("/add",(req,res)=>{
    const{name,pass} = req.body;
    model.create({name,pass})
    .then((result)=>{res.json(result)})
    .catch((err)=>{res.json(err)})
})

app.get("/data",(a,b)=>{
    model.find()
    .then((result)=>b.json(result))
    .catch((err)=>b.json(err))
})



app.listen("8000",()=>{console.log("create aaiduchuda")})