const express = require('express');

const notesRouter = require('./NoteRoutes');

const app = express();

app.use('/notes', notesRouter);

module.exports = app;