const express = require('express');
const userSchema = require('../models/user');
//const user = require('../models/user');

const router = express.Router();

//create user
router.post('/users', (req, res) => {
    //res.send('Create user route');
    const user = userSchema(req.body);
    user
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
/* 
router.post('/users', async (req, res) => {
    const { name, age, email } = req.body;
    const users = new users({ name, age, email })
}) */

//get user
router.get('/users', (req, res) => {
    //res.send('Create user route');
    userSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});



module.exports = router;
