import { Feedback } from '../models/feedback.model'

// @ts-ignore
export const addNewFeedback = async (req, res) => {
    try {
        const { name, email, text } = req.body;
        if (!name || !email || !text) {
            return res.status(400).json({ message: 'Name, email, and text are required.' });
        }
        const feedback = new Feedback({ name, email, text });
        console.debug('Adding new feedback:', { name, email, text });
        await feedback.save();
        res.status(201).json({ message: 'Feedback submitted successfully' });
    } catch (error: any) {
        if (error.name === 'SequelizeValidationError') {
            return res.status(422).json({ message: `Validation error: ${error.errors}` });
        }
        console.error('Error submitting feedback:', error);
        res.status(500).json({ message: `Error submitting feedback: ${error.message}` });
    }
};

// @ts-ignore
export const getFeedbacks = async (req, res) => {
    try {
        const feedbacks = await Feedback.findAll();
        res.status(200).json(feedbacks);
    } catch (error: any) {
        res.status(500).json({ message: `Error fetching feedbacks: ${error.message}` });
    }
};

// @ts-ignore
export const getFeedbackById = async (req, res) => {
    try {
        const feedback = await Feedback.findOne({ where: { id: req.params.id } });
        if (!feedback) {
            return res.status(404).json({ message: 'Feedback not found' });
        }
        res.status(200).json(feedback);
    } catch (error) {
        res.status(500).json({ message: `Error fetching feedback ${error}` });
    }
};
