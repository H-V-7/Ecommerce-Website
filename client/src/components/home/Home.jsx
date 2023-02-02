import { useEffect } from "react"
import Nav from "./Nav"
import Banner from "./Banner"
import { getProducts } from "../../redux/actions/productAction"
import { useDispatch,useSelector } from "react-redux"
export default function Home(){
  
    const {products} = useSelector(state => state.getProducts)

    console.log(products)
    
    const dispatch = useDispatch()

    useEffect(() =>{
       dispatch(getProducts())
    },[dispatch])

    return(
        <>
            <Nav />
            <Banner />
        </>
    )
}