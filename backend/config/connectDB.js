import mongoose from 'mongoose';

export const connectDB = async () =>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI); 
            console.log('Database Connected');
        }catch (err){
            console.log('Cannot connect to mongoDB')
            console.error(`Error: ${err.message}`);
            process.exit(1); // Exit the process with failure
        }
}