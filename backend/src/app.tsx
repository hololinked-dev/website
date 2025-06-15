import * as express from 'express';
import * as dotenv from 'dotenv';
import * as swaggerUi from 'swagger-ui-express';
import * as YAML from 'yamljs';
import * as path from 'path';
import * as match from 'path-to-regexp';
import feedbackRoutes from './routes/feedback.routes';
import healthRoutes from './routes/health.routes';


dotenv.config();
const swaggerDocument = YAML.load(path.join(__dirname, './docs/openapi.yaml'));

// Parse swaggerDocument to find paths with security defined
const securedPaths: string[] = [];
if (swaggerDocument && swaggerDocument.paths) {
    for (const [route, methods] of Object.entries(swaggerDocument.paths)) {
        // @ts-ignore
        for (const [method, details] of Object.entries<any>(methods)) {
            if (details && details.security && details.security.length > 0) {
                if (!securedPaths.includes(route)) {
                    securedPaths.push(route);
                }
            }
        }
    }
}
console.debug('Secured paths:', securedPaths);


const app = express();

// Middleware
// JSON body parser
app.use(express.json());
// Authentication middleware
// @ts-ignore
app.use((req, res, next) => {
    const isSecured = securedPaths.some(pathPattern => {
        // Convert OpenAPI path patterns (e.g., /feedbacks/{id}) to path-to-regexp style (e.g., /feedbacks/:id)
        const openApiPattern = pathPattern.replace(/{([^}]+)}/g, ':$1');
        const matcher = match.match(openApiPattern, { decode: decodeURIComponent, end: true });
        return matcher(req.path) !== false;
    });
    console.debug('Request path:', req.path, 'isSecured:', isSecured);
    if (isSecured) {
        const token = req.headers['x-api-key'];
        if (!token || token !== process.env.AUTH_TOKEN) {
            console.warn('Unauthorized access attempt:', req.path);
            return res.status(401).json({ message: 'Unauthorized' });
        }
    } 
    next();
});

// Routes
// @ts-ignore
app.get('/', (req, res) => res.redirect('/api-docs'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/feedbacks', feedbackRoutes);
app.use('/health', healthRoutes);

export default app;