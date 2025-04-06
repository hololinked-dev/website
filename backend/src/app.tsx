import * as express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import feedbackRoutes from './routes/feedback.routes';

dotenv.config();

const app = express();
// Middleware
app.use(express.json());

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/myapp';
// MongoDB Connection
mongoose
    // @ts-ignore
    .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Routes
// @ts-ignore
app.get('/', (req, res) => {
    res.send('Hello, World! I am accessible!');
});
app.use('/feedbacks', feedbackRoutes);

export default app;