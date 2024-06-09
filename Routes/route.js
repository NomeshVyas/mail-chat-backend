import express from 'express';
import { saveSendEmail, getEmails, saveDraftEmail, moveEmailsToBin, toggleStarredEmail, deleteEmails } from '../Controllers/emailController.js';

const routes = express.Router();

routes.post('/save', saveSendEmail);
routes.get('/emails/:type', getEmails);
routes.post('/save-draft', saveDraftEmail);
routes.post('/bin', moveEmailsToBin);
routes.post('/starred', toggleStarredEmail);
routes.delete('/delete', deleteEmails);

export default routes;