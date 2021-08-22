const express = require('express')
const app = express()
const path = require("path")
const router = express.Router()
const PORT = process.env.PORT || 8080

/* 
app.get('/',(req,res)=>{
    res.json({result:"OK",data:[1,2,3,4,5]})
})
*/
/* 
app.get('/hello',(req,res)=>{
    res.json({result:"OKNG",data:[2,11,322,433,52]})
})
*/
app.set("view engine","pug")
app.listen(PORT,()=>{
    console.log(`App running at port ${PORT}`)
})