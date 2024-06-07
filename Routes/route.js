import express from 'express';
import { saveSendEmail, getEmails, saveDraftEmail } from '../Controllers/emailController.js';

const routes = express.Router();

routes.post('/save', saveSendEmail);
routes.get('/emails/:type', getEmails);
routes.post('/save-draft', saveDraftEmail);

export default routes;