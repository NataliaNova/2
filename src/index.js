const express = require('express');
const { default: mongoose } = require('mongoose');
const mong = require('mongoose');
require('dotenv').config();
const userRoutes = require('./routes/user');

const app = express();
const port = process.env.PORT || 3000;

//middleware
app.use(express.json());
app.use('/api/', userRoutes);


//routes
app.get('/', (req, res) => {
    res.send('Hello, U are in my API!');
});

//Didnt work!

//mongodb connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch((err) => console.error('Error connecting to MongoDB Atlas:', err));

app.listen(port, () => {
    console.log('Server listen on port', port);
})