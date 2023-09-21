const mongoose=require('mongoose');
const validator=require('validator');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const Task = require('./task');


const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Please enter a valid email');
            }
        }
    },
    password:{
        type:String,
        required:true,
        minlength:7,
        trim:true,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('Password should not contain "password" in it');
            }
        }
    },
    age:{
        type:Number,
        default:0,
        validate(value){
            if(value<0){
                throw new Error('Please enter a valid age, it cannot be a negative number');
            }
        }
    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]
},{
    timestamps:true
})

userSchema.virtual('tasks',{
    ref:'Task',
    localField:'_id',
    foreignField:'owner'
})
//To pupulate this virtual field===>    user.populate('task').execPolulate()

userSchema.methods.toJSON=function(){
    const user=this;
    const userOb=user.toObject();

    delete userOb.password;
    delete userOb.tokens;

    return userOb;
}

userSchema.methods.getAuthToken=async function(){
    const user=this;
    const token=jwt.sign({_id:user._id.toString()},'taskmanagerapi');
    user.tokens=user.tokens.concat({token});
    await user.save();
    return token;
}

userSchema.statics.findByCredentials=async(email,password)=>{
    const user=await User.findOne({email});
    if(!user){
        throw new Error('Unable to login, user not found');
    }
    const isMatch=bcrypt.compare(password,user.password);
    if(!isMatch){
        throw new Error('Unable to login, password is wrong');
    }
    return user;

}


userSchema.pre('save',async function(next){
    const user=this;

    if(user.isModified('password')){
        user.password=await bcrypt.hash(user.password,8); 
    }

    next();
})

userSchema.pre('remove',async function(next){
    const user=this;

    await Task.deleteMany({owner:user._id});

    next();
})

const User=mongoose.model('User',userSchema);

module.exports=User;