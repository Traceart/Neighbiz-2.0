const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const businessRoutes = require('./routes/business');
const chatRoutes = require('./routes/chat');
const setupSocket = require('./socket');

/**
 * Express application instance.
 * @type {import('express').Express}
 */
/**
 * The Express application instance used to define middleware, routes, and server configuration.
 * @type {import('express').Express}
 */
const app = express();
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/business', businessRoutes);
app.use('/api/chat', chatRoutes);

const http = require('http').createServer(app);
setupSocket(http);

mongoose.connect(process.env.MONGO_URI).then(() => {
  http.listen(5000, () => console.log('🚀 Server running'));
});



