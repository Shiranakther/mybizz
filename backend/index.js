import express from 'express';
import dotenv from 'dotenv';
import {connectDB} from './config/connectDB.js';

// Import routes
import productRoutes from './routes/productRoute.js';

dotenv.config({ path: './config/.env' });
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5001;


// Import routes
app.use('/api/products', productRoutes);




app.listen(PORT,() =>{
    connectDB();
    console.log(`Server is running on port ${PORT}`);
}
)