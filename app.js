const express=require('express')
const app=express()
const port=3000
const connectDB=require('./db/dbconnect')
const {userHandlerSignUp}=require('./controllers/userlogin')
require('dotenv').config()
const userroute=require('./routes/userauth')

app.use(express.json());
app.use('/auth',userroute)



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

