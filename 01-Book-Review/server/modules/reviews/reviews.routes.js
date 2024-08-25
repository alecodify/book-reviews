const express = require('express');
const verifyUser = require('../../middleware/verifyUser');
const CreateReview = require('./controllers/CreateReview');
const GetReview = require('./controllers/GetReview');
const UpdateReview = require('./controllers/UpdateReview');
const DeleteReview = require('./controllers/DeleteReview');

const reviewRoutes = express.Router();

reviewRoutes.post('/create', verifyUser, CreateReview);
reviewRoutes.put('/:id', verifyUser, UpdateReview);
reviewRoutes.delete('/:id', verifyUser, DeleteReview);

reviewRoutes.get('/:id', GetReview);

module.exports = reviewRoutes;