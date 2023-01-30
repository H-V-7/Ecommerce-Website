import { Box,  InputBase} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { styled } from "@mui/system";
import Menu from "./Menu"


const SearchBox = styled(Box)`
    display:flex;
    flex-direction:row;
    align-items:center;
    padding:20px;
    width:35vw;
    @media only screen and (max-width:786px){
        padding:10px;
        width:70vw;
    }
    
`
    

const SearchBar =styled(InputBase)`
    width:100%;
    padding:5px;
    background: white;
    border-radius:5px;
    @media only screen and (max-width:786px){
        width:100%;
    }
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