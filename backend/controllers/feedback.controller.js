import Feedback from '../models/feedback.model.js';

export const addNewFeedback = async (req, res) => {
    try {
        const { name, email, text } = req.body;
        const feedback = new Feedback({ name, email, text });
        await feedback.save();
        res.status(201).json({ message: 'Feedback submitted successfully', feedback });
    } catch (error) {
        res.status(500).json({ message: 'Error submitting feedback', error });
    }
};

export const getFeedbacks = async (req, res) => {
    try {
        const feedbacks = await Feedback.find();
        res.status(200).json(feedbacks);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching feedbacks', error });
    }
};

export const getFeedbackById = async (req, res) => {
    try {
        const feedback = await Feedback.findById(req.params.id);
        if (!feedback) {
            return res.status(404).json({ message: 'Feedback not found' });
        }
        res.status(200).json(feedback);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching feedback', error });
    }
};
