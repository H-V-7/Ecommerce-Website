import { navData } from "../../constants/data";

import { styled } from "@mui/system";

const NavItems = styled("Box")`
  display:flex;
  flex-direction:column;
  text-align:center;
  align-items:center;
  justify-content:center;
  img{
    width:100%;
  }
  a{
    text-decoration:none;
  }
 
 
   
`
const NavContainer = styled(NavItems)`
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;
    
    
`

export default function Nav(){
    return(
        <NavContainer>
            {navData.map((result,index) => (<NavItems key={index}><img src={result.url} alt={result.text}/><a href="home">{result.text}</a></NavItems>))}
        </NavContainer>
    )
}