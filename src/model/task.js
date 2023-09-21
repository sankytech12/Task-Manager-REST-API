const mongoose=require('mongoose');


const taskSchema=new mongoose.Schema({
    description:{
        type:String,
        required:true,
        trim:true
    },
    completed:{
        type:Boolean,
        default:false,
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    }
},{
    timestamps:true
})
//task.populate('owner').execPopulate()     ==> populate owner field with the User associated with it


const Task=mongoose.model('Task',taskSchema);

module.exports=Task;