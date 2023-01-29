import { Button,Box, Typography} from "@mui/material";
import { styled } from "@mui/system";
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';



const MenuWrapper = styled(Box)`
    width:40vw;
    display:flex;
    flex-direction:row;
    align-items:center;    
    justify-content:space-evenly;
`


export default function Menu(){
    return(
    <MenuWrapper>
        <Button variant="contained">Login</Button>
        <Box sx={{display:"flex",alignItems:"center",gap:1}}>
            <ShoppingCartTwoToneIcon sx={{fontSize:30}}/>
            <Typography sx={{fontSize:25}}>Cart</Typography>
        </Box>
        </MenuWrapper>
    
    )
}