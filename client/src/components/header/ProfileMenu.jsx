import { useState } from "react"
import { Typography, MenuItem, Menu,Box } from "@mui/material"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';


export default function ProfileMenu({ userName, setUserName }){

  const [open, setopen] = useState(false);

  function handleOnClick(event){
    setopen(event.currentTarget) //we use this to open the menu with respect to the element which triggred it 
  }
  function handleClose(){
    setopen(false)
  }
  function logOut(){
    setUserName("")
  }
    return(
        <>
        <Box sx={{display:"flex",gap:2,cursor:"pointer"}} onClick={handleOnClick}><AccountCircleIcon />
        <Typography sx={{cursor:"pointer"}} onClick={handleOnClick}>{userName}</Typography></Box>
        
        <Menu
        
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
       f
      >
        <MenuItem sx={{gap:1}}><AccountCircleIcon/>Profile</MenuItem>
        
        <MenuItem sx={{gap:1}}  onClick={ handleClose,logOut}><LogoutIcon />Logout</MenuItem>
      </Menu>
      </>
    )
}