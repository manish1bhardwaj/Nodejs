const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/authentication')
    .then(() => {console.log('MongoDB connected')})
    .catch(err => {console.log("MongoDB not connected", err)});





const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});