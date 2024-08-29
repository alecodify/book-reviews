require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const errorHandler = require('./handlers/errorHandler');
const authRoutes = require('./modules/auth/auth.routes');
const userRoutes = require('./modules/users/users.routes');
const bookRoutes = require('./modules/books/books.routes');
const reviewRoutes = require('./modules/reviews/reviews.routes');

const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(cors({origin: 'http://localhost:5173'}));
app.use(errorHandler);

app.use((req,res,next)=>{
    console.log(`Incomming ${req.method} Request on URL : ${req.url}`);
    next();    
})

mongoose.connect(process.env.MONGO, {}).then(() => console.log("Connected to MongoDB Database Successfully")).catch((error) => console.log(`Error While Connecting to Database.${error}`));

require('./models/user.model');
require('./models/book.model');
require('./models/review.model');

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/reviews', reviewRoutes);

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(process.env.PORT, () => console.log(`backend is running on port http://localhost:${process.env.PORT}`))