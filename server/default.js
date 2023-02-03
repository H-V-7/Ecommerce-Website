import { products } from "./constants/data.js";
import { Products } from "./schema/productSchema.js";


export const defaultData = async() => {
    try{
        await Products.deleteMany({});
        await Products.insertMany(products);
        console.log("Products Created");
    }
    catch(error){
        console.log(error);
    }
}

