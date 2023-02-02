import axios from "axios";

const URL = "http://localhost:3001";


//this function will post data to a server and there will be a response which will be returned by this function
export async function handleSignUp(data){
    try{
        return await axios.post(`${URL}/signup`, data)
    }catch(error){
        console.log("Error While SiginingIn. Please Try again", error)
        return error.response
    }
    
} 

export async function handleLogin(data){
    try{
        return await axios.post(`${URL}/login`,data);
    }
    catch(error){
        console.log("Error While Login. Please Try again",error)
        return error.response
    }
}

