import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    id:String,
    url:String,
    title:Object,
    price:Object,
    quantity:Number,
    descriptuion:String
})

export const Products = mongoose.model("product",productSchema);