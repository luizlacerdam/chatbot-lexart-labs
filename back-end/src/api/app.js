const cors = require('cors');
const express = require('express');
const path = require('path');
const ChatRouter = require('../routers/chat.router');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/', ChatRouter);

module.exports = app;