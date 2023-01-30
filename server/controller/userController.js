import { request } from "express";
import User from "../schema/signUpSchema.js"

export  async function userSignUp (req,res){
    try{

        //checking if the user already exists it can be done by the help of email or the user name 
        //using username
        const userExist = await User.findOne({userName:request.body.userName});

        //if user exist then we will return a response using 
        if(userExist){
            return res.status(401).json({message:"User already exist"});
        }

        //if not then we will save the user 
        const user = req.body;
        const newUser = new User(user); //creating new user object and validating the user using User schema
        await newUser.save()
        
        res.status(200).json({message:user});
    }catch(error){
        res.status(500).json({message: error.message})
    }
}