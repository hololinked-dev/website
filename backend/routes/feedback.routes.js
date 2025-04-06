import express from 'express';
import { addNewFeedback, getFeedbacks, getFeedbackById } from "../controllers/feedback.controller.js";

const router = express.Router();

router.post('/', addNewFeedback);
router.get('/', getFeedbacks);
router.get('/:id', getFeedbackById);

export default router;