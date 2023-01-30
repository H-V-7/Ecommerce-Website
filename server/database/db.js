import mongoose from "mongoose";




export const Connection =  async (USERNAME,PASSWORD) =>{
    const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@ecommerce.q2n20yj.mongodb.net/?retryWrites=true&w=majority`;

    try{
        await mongoose.connect(URL,{useUnifiedTopology:true, useNewUrlParser: true});
        console.log("Database Connected");
    }catch(error){
        console.log(error.message);
    }

}