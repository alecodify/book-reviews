const express = require('express');
const verifyUser = require('../../middleware/verifyUser');
const GetAllUsers = require('./controllers/GetAllUsers');
const GetUser = require('./controllers/GetUser');
const DeleteUser = require('./controllers/DeleteUser');

const userRoutes = express.Router();

userRoutes.get('/', GetAllUsers);
userRoutes.get('/user',verifyUser, GetUser);
userRoutes.delete('/:id',verifyUser, DeleteUser);

module.exports = userRoutes;
