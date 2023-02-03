import { useEffect } from "react"
import {useDispatch,useSelector} from "react-redux"
import { getProductDetails } from "../../redux/actions/productAction";
import { useParams } from "react-router-dom";



export default function DetailView(){

    const dispatch = useDispatch();
    const {id} = useParams();
    console.log(id);

    useEffect(() =>{
        dispatch(getProductDetails(id))
    },[dispatch,id])

    return(<h1>Hello</h1>)
}