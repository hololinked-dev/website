import * as express from 'express';
import * as dotenv from 'dotenv';
import feedbackRoutes from './routes/feedback.routes';
import healthRoutes from './routes/health.routes';
import * as swaggerUi from 'swagger-ui-express';
import * as YAML from 'yamljs';
import * as path from 'path';


dotenv.config();
const swaggerDocument = YAML.load(path.join(__dirname, './docs/openapi.yaml'));

const app = express();
// Middleware
app.use(express.json());

// Routes
// @ts-ignore
app.get('/', (req, res) => res.redirect('/api-docs'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/feedbacks', feedbackRoutes);
app.use('/health', healthRoutes)

export default app;