import * as express from 'express';
import { healthCheck } from '../controllers/health.controller';

const router = express.Router();

router.get('/', healthCheck);

export default router;