const mongoose=require('mongoose')
const User = require('./userSchema')

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
    },

    User:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
})



const Task=mongoose.model('Task',taskSchema)

module.exports=Task



