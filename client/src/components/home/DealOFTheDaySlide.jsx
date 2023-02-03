import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { styled } from "@mui/system";
import {Box,Button,Paper,Typography,Divider} from "@mui/material"
import { Link } from "react-router-dom";

const ProductContainer = styled(Box)`
    

`
const Image = styled("img")`
width:50%;
    
   
`


export default function DealOfTheDaySlide({products, title}){
    console.log(products)
    const responsive = {
        
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return(
        <Box sx={{marginTop:10,backgroundColor:"white"}}>
            <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:1,padding:1}}><Typography>{title}</Typography><Button variant="contained">View All</Button></Box>
            <Divider  />
            <Box>   
                <Carousel infinite={true}  autoPlay={true} autoPlaySpeed={3000} centerMode={true} keyBoardControl={true} swipeable={false} responsive={responsive} otListClass="custom-dot-list-style"
                     itemClass="carousel-item-padding-2-px">    
                     {products.map((result,index) =>(
                      <Link to={`product/${result.id}`} style={{textDecoration:"none",color:"inherit"}}>
                        <ProductContainer sx={{display:"flex",flexDirection:"column",alignItems:"center",gap:2,padding:2,textAlign:"center"}}>
                        <Image src={result.url} alt="products" />
                        <Typography sx={{fontWeight:"600" ,color:"#21212"}}>{result.title.shortTitle}</Typography>
                        <Typography sx={{color:"green"}}>{result.discount}</Typography>
                        <Typography sx={{opacity:0.5}}>{result.tagline}</Typography>
                        </ProductContainer>
                      </Link>))}
            </Carousel></Box>
           
        
        </Box>

       
    )
}