const express = require('express');

const User = require('../models/users')

const router = express.Router();

router.post('/register', async (req, res)=>{
    try {
        const user = await  User.create(req.body);
        return res.send({User});

    } catch (error) {
        return res.status(400).send({error: 'Registration failed'});
        console.log(error)
    }
})

module.exports = app => app.use('/auth', router);

// h g