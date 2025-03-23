const express= require('express')
const app=express()

const port = process.env.PORT || 8000

app.get("/",(req,res)=>{
    res.send("Subscribe to Sougata Pal's Channel")
})

app.listen(port,()=>{
    `Server started on port ${port}`
})