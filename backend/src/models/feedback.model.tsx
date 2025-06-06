import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    text: { type: String, required: true }
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

export default Feedback;