const express = require('express');
const app = express();
const {port} = require('./config/keys')

console.log("PORT"+port);
const PORT = port;

app.use(express.json())

app.post('/abc',(req,res)=>{
  res.json({message:"saved successfully post api"})
})

app.get('/getApi',(req,res)=>{
  res.json({message:"saved successfully get api"})
})


if(process.env.NODE_ENV=="production"){
  app.use(express.static('client/build'))
  const path = require('path')
  app.get("*",(req,res)=>{
      res.sendFile(path.resolve(__dirname,'client','build','index.html'))
  })
}


app.listen(PORT,() => {
    console.log("server on runnning Port number",PORT);
})