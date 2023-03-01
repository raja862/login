const express=require("express");
require('dotenv').config();
const cors=require('cors');
const bodyParser=require("body-parser");
const dbm=require("./dbconnect")
const router=require("./routes/loginreg")


const app=express();
dbm();
app.use(express.json());
app.use(cors());
app.use(router)
app.use(bodyParser.urlencoded({ extended: true }))


const PORT=process.env.PORT
app.listen(PORT,()=>{
    console.log("app is running 5050")
})