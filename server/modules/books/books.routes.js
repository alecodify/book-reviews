const express = require('express');
const verifyUser = require('../../middleware/verifyUser');
const CreateBook = require('./controllers/CreateBook');
const GetBooks = require('./controllers/GetBooks');
const GetBook = require('./controllers/GetBook');
const UpdateBook = require('./controllers/UpdateBook');
const DeleteBook = require('./controllers/DeleteBook');

const bookRoutes = express.Router();

bookRoutes.post('/create', verifyUser, CreateBook);
bookRoutes.put('/:id', verifyUser, UpdateBook);
bookRoutes.delete('/:id', verifyUser, DeleteBook);

bookRoutes.get('/', GetBooks);
bookRoutes.get('/:id', GetBook);

module.exports = bookRoutes;