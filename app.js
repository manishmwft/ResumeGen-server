// src/app.js
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();

// Middleware for logging HTTP requests in development mode

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}


app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173', 
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
}));

// Routes
const authRoutes = require('./routes/authRoutes');
const resumeRoutes = require('./routes/resumeRoutes');

// Mount routes
app.use('/api/auth', authRoutes);
app.use('/api/resumes', resumeRoutes);

// Custom 404 error handler for undefined routes
app.use(notFound);

// Custom error handler for all errors
app.use(errorHandler);

module.exports = app;
