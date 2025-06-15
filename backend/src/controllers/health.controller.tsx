import { sequelize } from '../db';

// @ts-ignore
export const healthCheck = async (req, res) => {
    try {
        await sequelize.query('SELECT 1');
        res.status(200).json({ status: 'OK', message: 'Service is healthy' });
    } catch (error: any) {
        console.error('Health check error:', error);
        res.status(500).json({ status: 'ERROR', message: `DB not accessible yet: ${error.message}` });
    }
}