import mongoose from "mongoose";

const connectDB = async () =>{
    try{
        mongoose.connection.on('connected', ()=> console.log('Database connected'));
        await mongoose.connect(`${process.env.MONGODB_URI}/new-car-rental`)
        console.log("Connecting to MongoDB...");
        
    } catch(error){
        console.log( error.message);
    }    
}

/*mongodb+srv://kasunweer71:kAsun246@cluster0.ygp6dfh.mongodb.net*/

export default connectDB;