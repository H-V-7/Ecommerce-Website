import { Box, colors, InputBase} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { styled } from "@mui/system";
import Menu from "./Menu"


const SearchBox = styled(Box)`
    display:flex;
    flex-direction:row;
    align-items:center;
    padding:20px;
    width:35vw;

    
`
    

const SearchBar =styled(InputBase)`
    width:100%;
    padding:5px;
    background: white;
    border-radius:5px;
  
`
    



export default function Search(){
    return(<>
        <SearchBox>
             <SearchBar 
                placeholder="Search For Products"
             />
             <Box>
                <SearchIcon style={{color:"blue"}}/>
            </Box>
        </SearchBox>
        <Menu />
        </>
       
    )
}