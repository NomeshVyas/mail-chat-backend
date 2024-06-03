const express = require('express')
const dotenv = require('dotenv')
const dbConnect = require('./dbConnect')

dotenv.config('./.env')

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

dbConnect()
app.listen(PORT, ()=>{
    console.log(`Listening on port: ${PORT}`);
})