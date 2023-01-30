import { useState } from "react";

import {Box,Dialog,TextField, Button,Typography} from "@mui/material"
import Face4TwoToneIcon from '@mui/icons-material/Face4TwoTone';

export default function LoginForm({openForm,setOpenForm}){
    function handleOnClose(){
        setOpenForm(false);
        setPage(authPage.login);
    }

const authPage = {
    login:{
        view:"login",
        Heading:"Login Page"
    },
    signUp:{
        view:"signup",
        Heading:"SignUp Page"
    }
}

    const [page, setPage] = useState(authPage.login)

    function toggleSignUp(){
        setPage(authPage.signUp)
    }
    function toggleLogin(){
        setPage(authPage.login)
    }
    return(<Dialog open={openForm} onClose={handleOnClose}>
        <Box sx={{display:"flex",gap:2,padding:2,width:500,height:500}}>
            <Box sx={{background:"blue"}}>
                <Typography>{page.Heading}</Typography>
                <Face4TwoToneIcon sx={{height:100,width:100}}/>
            </Box>
            {page.view === "login" ? <Box sx={{display:"flex",flexDirection:"column",gap:5,padding:2}}>
                <TextField label="Email/Mobile Number" variant="outlined" />
                <TextField label="Password" variant="outlined" />
                <Button variant="contained">Login</Button>
                <Typography>OR</Typography>
                <Button variant="contained">Request OTP</Button>
                <Typography onClick={toggleSignUp}>New User? Create Account</Typography>
            </Box>
            :<Box sx={{display:"flex",flexDirection:"column",gap:5,padding:2}}>
                <TextField label=" First Name" variant="outlined" />
                <TextField label="Last Name" variant="outlined" />
                <TextField label="User Name" variant="outlined" />
                <TextField label="Email ID" variant="outlined" />
                <TextField label="Password" variant="outlined" />
                <TextField label="Confirm Password" variant="outlined" />
                <Button variant="contained">Sign Up</Button>
                <Typography>OR</Typography>
                
                <Typography onClick = {toggleLogin}>Already Have account ? Login</Typography>
            </Box>}
        </Box>
            </Dialog>)
}