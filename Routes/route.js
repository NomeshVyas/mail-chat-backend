import express from 'express';
import { saveSendEmail } from '../Controllers/emailController.js';

const routes = express.Router();

routes.post('/save', saveSendEmail);

export default routes;