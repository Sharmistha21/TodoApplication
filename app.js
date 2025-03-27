const express=require('express')
const app=express()
const port=3000
const connectDB=require('./db/dbconnect')
require('dotenv').config()

app.use(express.json());



const start=async()=>{
         try{
            await connectDB(process.env.MONGO_URI)
            app.listen(port,()=>{
                console.log(`listening on port ${port}`)
            })
         }
         catch(err){
            console.log(error)
         }
}

start();

