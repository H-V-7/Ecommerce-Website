import { useState,useContext} from "react";
import {Box,Dialog,TextField, Button,Typography, CircularProgress} from "@mui/material"
import Face4TwoToneIcon from '@mui/icons-material/Face4TwoTone';

import {DataContext} from "../../context/DataProvider";


//importing api functions 
import { handleSignUp,handleLogin } from "../../service/api";

export default function LoginForm({openForm,setOpenForm}){

    

    function handleOnClose(){
        setOpenForm(false);
        setPage(authPage.login);
        setError(false);
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
        setError(false)
        setPage(authPage.signUp)
    }
    function toggleLogin(){
        setError(false)
        setPage(authPage.login)
    }


    //states to save login and sign up page data on change in each input feilds
    const[loginData, setLoginData] = useState({email:"", password:""});

    const[signUpData, setSignUpData] = useState({firstName:"", lastName:"",userName:"", emailId:"",phoneNumber:"",password:"",confirmPassword:"" });

    const [error,setError] = useState("");
    
    
    //function for onchange and saving form data in state
    function handelOnChangeSignUp(event){ 
        setSignUpData(prevData => {
           return{...prevData,
                [event.target.name]:event.target.value
           } 
        })
    }

    function handelOnChangeLogin(event){ 
        setLoginData(prevData => {
           return{...prevData,
                [event.target.name]:event.target.value
           } 
        })
    }
   

    const [loading, setLoading] = useState(null)

    const [userName,setUserName] = useContext(DataContext);

    async function login(){
        let response = await handleLogin(loginData);
        console.log(response)
        if(!response) return;
        if(response.status === 200){
            setLoading(false)
            setUserName(response.data.user.firstName) 
            handleOnClose()
        }
        else{
            setLoading(false)
            setError(true)
        }
        
        
    }

    function isLoading(){
        setLoading(true);
    }

    async function signUp(){
        let response = await handleSignUp(signUpData);
        console.log(response)
       if(!response) return; //if there will be no response then this function will end here only
       if(response.status === 200)
        {
            setLoading(false)
            setUserName(response.data.newUser.firstName)
            handleOnClose()
        }
        else if(response.status === 401){
            setLoading(false)
            setError(true)
            
        }
        
        
      
       
    }
   
   
    

    return(<Dialog open={openForm} onClose={handleOnClose}>
        <Box sx={{display:"flex",gap:2,padding:2,width:500,height:500}}>
            <Box sx={{background:"blue"}}>
                <Typography>{page.Heading}</Typography>
                <Face4TwoToneIcon sx={{height:100,width:100}}/>
            </Box>
            {page.view === "login" ? 
            <Box sx={{display:"flex",flexDirection:"column",gap:2,padding:2}}>
                {loading ? <CircularProgress />
                    :
                    <>{error ? <Typography sx={{color:"red",fontSize:15}}>Please Check password and email ID</Typography> : ""}
                <TextField label="Email Id" type="email" name="email" onChange={handelOnChangeLogin} variatnt="outlined" />
                <TextField label="Password" type="password" onChange={handelOnChangeLogin} name="password" variant="outlined" />
                <Button variant="contained" onClick={()=>{login();isLoading()}}>Login</Button>
                <Typography onClick= {toggleSignUp}>New User? Create Account</Typography>
                    </>
                }
                
            </Box>
            :<Box sx={{display:"flex",flexDirection:"column",gap:2,padding:1}}>

                {loading ? <CircularProgress /> 
                : <>{error ? <Typography sx={{color:"red",fontSize:15}}>User Exist</Typography> : ""}
                <TextField label=" First Name" name="firstName" onChange={handelOnChangeSignUp} variant="outlined" />
                <TextField label="Last Name" name="lastName" onChange={handelOnChangeSignUp} variant="outlined" />
                <TextField label="User Name" name="userName" onChange={handelOnChangeSignUp} variant="outlined" />
                <TextField label="Email ID" name="emailId" onChange={handelOnChangeSignUp} variant="outlined" />
                <TextField label="Phone Number" name="phoneNumber" onChange={handelOnChangeSignUp} variant="outlined" />
                <TextField label="Password" type="password" name="password" onChange={handelOnChangeSignUp} variant="outlined" />
                <TextField label="Confirm Password" type="password" name="confirmPassword" onChange={handelOnChangeSignUp} variant="outlined" />
                <Button type="submit" variant="contained" onClick={()=>{signUp();isLoading()}}>Sign Up</Button>
                <Typography>OR</Typography>
                <Typography onClick = {toggleLogin}>Already Have account ? Login</Typography></> 
                }
            
               
            </Box>}
        </Box>
            </Dialog>)
}