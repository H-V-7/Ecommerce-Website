import axios from "axios"


const URL = "http://localhost:3001"

export const getProducts = () => async(dispatch) => {
    try{
       const {data} =  await axios.get(`${URL}/products`);
        
        dispatch({type:"productSucess",payload:data})
    }catch(error){
        dispatch({type:"productFail",payload:error.message})
        console.log("error while calling getproducts api",error.message)
    }
}