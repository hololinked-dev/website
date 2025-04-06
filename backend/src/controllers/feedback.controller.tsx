import Feedback from '../models/feedback.model'

// @ts-ignore
export const addNewFeedback = async (req, res) => {
    try {
        const { name, email, text } = req.body;
        const id = new Date().getTime().toString(36) + Math.random().toString(36).substring(2, 15);
        const feedback = new Feedback({ id, name, email, text });
        await feedback.save();
        res.status(201).json({ message: 'Feedback submitted successfully', feedback });
    } catch (error) {
        res.status(500).json({ message: 'Error submitting feedback', error });
    }
};

// @ts-ignore
export const getFeedbacks = async (req, res) => {
    try {
        const feedbacks = await Feedback.find();
        res.status(200).json(feedbacks);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching feedbacks', error });
    }
};

// @ts-ignore
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
