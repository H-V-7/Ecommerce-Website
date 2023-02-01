import { useState,useContext } from "react";
import { Button,Box, Typography} from "@mui/material";
import { styled } from "@mui/system";
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';

import LoginForm from "../login/loginForm";
import { DataContext } from "../../context/DataProvider";
import ProfileMenu from "./ProfileMenu";

const MenuWrapper = styled(Box)`
    width:40vw;
    display:flex;
    flex-direction:row;
    align-items:center;    
    justify-content:space-evenly;
    
`

const LoginButton = styled(Button)`
    width:20%;
`






export default function Menu(){
    const [openForm, setOpenForm] = useState(false)
    function handleOnClick(){
        setOpenForm(true);
    }
    
    const [userName,setUserName] = useContext(DataContext);

    return(
    <MenuWrapper>
        
        {userName ? 
            <ProfileMenu userName={userName} setUserName={setUserName}/>
            :
            <LoginButton onClick={handleOnClick} variant="contained">Login</LoginButton>
        }
            
        
       
        <Box sx={{display:"flex",alignItems:"center",gap:1}}>
            <ShoppingCartTwoToneIcon sx={{fontSize:30}}/>
            <Typography sx={{fontSize:25}}>Cart</Typography>
        </Box>
        <LoginForm openForm={openForm} setOpenForm={setOpenForm}/>
        </MenuWrapper>
    
    )
}