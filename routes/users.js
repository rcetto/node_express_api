import express from 'express';

import { v4 as uuidv4 } from 'uuid';


const router =  express.Router();


let users = [];


// All routes in here are starting with /users
router.get('/', (req, res) => {
    console.log(users);
    res.send(users);
});

// Router para introducir info
router.post('/', (req, res) => {
    //user.push
    const user = req.body
    
    users.push({ ...user, id: uuidv4() });
    res.send(`User with the name ${user.firstName} added to the database!`);
});


export default router;