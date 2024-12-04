import express from 'express';
const router = express.Router();

//mock database

const users = [
    {
        first_name  : 'balosky',
        last_name   : 'raja Guguk',
        email       : 'balosky@gmail.com',
    },
    {
        first_name  : 'jhon',
        last_name   : 'jhon sarumaha',
        email       : 'jhon@gmail.com',
    },
];

// Getting the list of users from the mock database
router.get('/', (req, res) => {
    res.send(users);
});  

export default router;