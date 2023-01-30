import { useState } from "react";
import {Box,Dialog,TextField, Button,Typography} from "@mui/material"
import Face4TwoToneIcon from '@mui/icons-material/Face4TwoTone';

//importing api functions 
import { handleSignUp } from "../../service/api";

export default function LoginForm({openForm,setOpenForm}){
    function handleOnClose(){
        setOpenForm(false);
        setPage(authPage.login);
    }

const authPage = { //object for state toggle 
    login:{
        view:"login",
        Heading:"Login Page"
    },
    signUp:{
        view:"signup",
        Heading:"SignUp Page"
    }
}

    const [page, setPage] = useState(authPage.login) //page toggle state

    function toggleSignUp(){
        setPage(authPage.signUp)
    }
    function toggleLogin(){
        setPage(authPage.login)
    }


    //states to save login and sign up page data on change in each input feilds
    const[loginData, setLoiginData] = useState({email:"", password:""});

    const[signUpData, setSignUpData] = useState({firstName:"", lastName:"",userName:"", emailId:"",phoneNumber:"",password:"",confirmPassword:"" });

   
    
    //function for onchange and saving form data in state
    function handelOnChange(event){ 
        setSignUpData(prevData => {
           return{...prevData,
                [event.target.name]:event.target.value
           } 
        })
    }

    async function signUp(){
        const response = await handleSignUp(signUpData);
       
    }
    

    return(<Dialog open={openForm} onClose={handleOnClose}>
        <Box sx={{display:"flex",gap:2,padding:2,width:500,height:500}}>
            <Box sx={{background:"blue"}}>
                <Typography>{page.Heading}</Typography>
                <Face4TwoToneIcon sx={{height:100,width:100}}/>
            </Box>
            {page.view === "login" ? <Box sx={{display:"flex",flexDirection:"column",gap:5,padding:2}}>
                <TextField label="Email/Mobile Number" name="email" variant="outlined" />
                <TextField label="Password"  name="password" variant="outlined" />
                <Button variant="contained">Login</Button>
                <Typography>OR</Typography>
                <Button variant="contained">Request OTP</Button>
                <Typography onClick={toggleSignUp}>New User? Create Account</Typography>
            </Box>
            :<Box sx={{display:"flex",flexDirection:"column",gap:0.35,padding:1}}>
                <TextField label=" First Name" name="firstName" onChange={handelOnChange} variant="outlined" />
                <TextField label="Last Name" name="lastName" onChange={handelOnChange} variant="outlined" />
                <TextField label="User Name" name="userName" onChange={handelOnChange} variant="outlined" />
                <TextField label="Email ID" name="emailId" onChange={handelOnChange} variant="outlined" />
                <TextField label="Phone Number" name="phoneNumber" onChange={handelOnChange} variant="outlined" />
                <TextField label="Password" name="password" onChange={handelOnChange} variant="outlined" />
                <TextField label="Confirm Password" name="confirmPassword" onChange={handelOnChange} variant="outlined" />
                <Button type="submit" variant="contained" onClick={signUp}>Sign Up</Button>
                <Typography>OR</Typography>
                <Typography onClick = {toggleLogin}>Already Have account ? Login</Typography>
            </Box>}
        </Box>
            </Dialog>)
}