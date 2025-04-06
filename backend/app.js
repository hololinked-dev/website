import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import feedbackRoutes from './routes/feedback.routes.js';

dotenv.config();

const app = express();
// Middleware
app.use(express.json());

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/myapp';
// MongoDB Connection
mongoose
    .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.get('/', (req, res) => {
    res.send('Hello, World! I am accessible!');
});
app.use('/feedbacks', feedbackRoutes);

export default app;