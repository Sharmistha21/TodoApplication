const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        maxlength:[20,'username cant be more than 20 chars'],
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true

    },
    password:{
        type:String,
        required: true,
        minlength:[6,'password must at least be 6 chars']
    }
})

const User=mongoose.model('User',userSchema)
module.exports=User