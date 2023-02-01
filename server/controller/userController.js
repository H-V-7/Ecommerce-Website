
import User from "../schema/signUpSchema.js"

export  async function userSignUp (req,res){
    
    try{
        
        console.log(req.body)
        //checking if the user already exists it can be done by the help of email or the user name 
        //using username
        const userExist = await User.findOne({emailId:req.body.emailId});

        //if user exist then we will return a response using 
        if(userExist){
           res.status(401).json({message:"User already exist"});
        }

        //if not then we will save the user 
        
        const user = req.body;
        const newUser = new User(user); //creating new user object and validating the user using User schema
        await newUser.save()
        
        res.status(200).json({message:"User Created",newUser});
    }catch(error){
        res.status(500).json({message:"Server Error Please Try Again"})
    }
}

export async function userLogin(req,res){
    try{
        const email = req.body.email;
        const password = req.body.password;

        let user = await User.findOne({emailId:email,password:password})
    if(user){
        res.status(200).json({user})
    }
    else{
       res.status(401).json({message:"Please Check Email and Password and try again!"});
    }

    }catch(error){
      res.status(500).json({message:"Server Error Please Try Again"})
    }
}