const router = require('express').Router();

const notesRouter = require('./NoteRoutes');


router.use('/notes', notesRouter);

module.exports = router;