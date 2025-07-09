import express from 'express';
import dotenv from 'dotenv';
import {connectDB} from './config/connectDB.js';
import cors from 'cors';

// Import routes
import productRoutes from './routes/productRoute.js';
import categoryRoutes from './routes/categoryRoute.js';
import uploadRoutes from './routes/uploadRoutes.js';

dotenv.config({ path: './config/.env' });
const app = express();

app.use(cors({
  origin: 'http://localhost:5173', // or your frontend URL
  credentials: true, // allow cookies/auth headers if needed
}));

app.use(express.json());

const PORT = process.env.PORT || 5001;


// Import routes
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api', uploadRoutes);




connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}).catch((err) => {
  console.error(" Failed to connect to MongoDB:", err);
});
