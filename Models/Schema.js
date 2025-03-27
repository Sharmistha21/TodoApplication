const mongoose=require('mongoose')

const taskSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'must provide name'],
        trim:true,
        maxLength:[20,'task cannot be more than 20 chars']

    },
    completed:{
        type:Boolean,
        default:false
    }
})

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required: true
    }
})

Task=mongoose.model('Task',taskSchema)
User=mongoose.model('User',userSchema)
module.exports={Task,User}



