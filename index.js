import express from 'express';
import connection from './Database/db.js';
import dotenv from 'dotenv';
import routes from './Routes/route.js';
import cors from 'cors';

dotenv.config();

const app = express();


app.use(cors());
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use('/', routes);

const PORT = 8000;

connection();

app.listen(PORT, ()=>console.log(`Server is started on PORT ${PORT}`));