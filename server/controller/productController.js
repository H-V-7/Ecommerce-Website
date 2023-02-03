import { Products } from "../schema/productSchema.js";

export async function getProducts(req,res){
    try{
        const product = await Products.find()
        res.status(200).json(product)
    }catch(error){
        res.status(500).json(error.message)
    }

}


export async function getProductById(req,res){
    try{
        const {id} = req.params
        
        const product = await Products.findOne({"id":id})
        res.status(200).json(product)
    }catch(error){
        res.status(500).json(error.message)
    }

}