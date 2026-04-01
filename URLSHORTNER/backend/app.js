const express = require('express');
const app = express();

const mongoose = require('mongoose');
const Url = require('./models/url');


mongoose.connect('mongodb://localhost:27017/Url_CB')
.then(() =>     console.log('Connected to MongoDB'))
.catch((err) => console.error('Could not connect to MongoDB', err));


    
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});