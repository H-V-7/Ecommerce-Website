import { useEffect } from "react"
import { Box,CircularProgress } from "@mui/material"
import Nav from "./Nav"
import Banner from "./Banner"
import DealOfTheDaySlide from "./DealOFTheDaySlide"
import ProductSlide from "./ProductSlides"
import { getProducts } from "../../redux/actions/productAction"
import { useDispatch,useSelector } from "react-redux"

export default function Home(){
  
   
    const {products} = useSelector(state => state.getProducts)

  
    
    const dispatch = useDispatch()

    useEffect(() =>{
       dispatch(getProducts())
       
    },[dispatch])

    return(
        <Box sx={{backgroundColor:"whitesmoke"}}>
            <Nav />
            <Banner />
         <DealOfTheDaySlide products={products} title="Deal Of The Day"/> 
         <ProductSlide products={products} title="Tshirts"/> 
           
        </Box>
    )
}