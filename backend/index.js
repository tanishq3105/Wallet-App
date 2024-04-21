const express = require("express");
const User=require("./db")
const rootRouter=require('./routes/index')
const cors=require('cors');
const PORT=3000;

const app=express();

app.use(cors());
app.use("/api/v1", rootRouter);
app.use(express.json())


app.listen(PORT,()=>{
    console.log("listening at Port 3000...")
})

