var express = require('express');
var path = require('path');
var cors = require('cors');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var socketIo = require('socket.io');
require('dotenv').config();

var streamersRouter = require('./routes/streamers');

var app = express();

var mongoDB = process.env.MONGO_URI;
app.use(cors());
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/streamers', streamersRouter);
var server = require('http').createServer(app);
var io = socketIo(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
    credentials: true,
  },
});

app.set('io', io);

server.listen(3001, () => {
  console.log('Server running on port 3001');
});

module.exports = app;
