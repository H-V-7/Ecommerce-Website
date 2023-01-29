import {AppBar,Toolbar,Box, Typography} from "@mui/material"
import { styled } from "@mui/system";
import StoreIcon from '@mui/icons-material/Store';
import Search from "./Search";





const Container = styled(Box)`
    margin-left:12%;
    display:flex;
    flex-direction:column;
    
    
`
const SubHeading = styled(Typography)`
    font-size:15px;
    font-style:italic;
`

  
    



 

export default function Header() {
    return(
        <AppBar sx={{background:"#FED049",height:75}}>
            <Toolbar>
                <Container>
                    <StoreIcon sx={{color:"#FFF8E1",height:50,width:50}}/>
                    <SubHeading>Shop
                        <Box component="span">Online</Box>
                    </SubHeading>
                </Container>
            <Search />
            </Toolbar>
        </AppBar>
    )
}