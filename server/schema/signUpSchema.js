import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required: true,
        trim:true,
        min:5,
        max:20
    },
    lastName:{
        type:String,
        required: true,
        trim:true,
        min:5,
        max:20
    },
    userName:{
        type:String,
        required: true,
        unique: true,
        trim:true,
        min:5,
        max:20,
        index:true
    },
    emailId:{
        type:String,
        required: true,
        trim:true,
        unique:true,
        lowercase:true
    },
    phoneNumber:{
        type:String,
        required: true,
        trim:true,
        max:10
    },
    password:{
        type:String,
        required:true,
        trim:true,
        min:5,
        max:20
    },
    confirmPassword:{
        type:String,
        required:true,
        trim:true,
        min:5,
        max:20
    },
});

const user = mongoose.model("user",userSchema);

export default user;