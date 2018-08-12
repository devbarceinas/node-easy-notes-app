const Note = require('../models/note.model.js');

// Create and save a new note
exports.create = (req, res) => {
    // Validate request
    if (!req.body.content) {
        return res.status(400).send({
            message: "Note content cant not be empty"
        });
    }

    // Create a note
    const note  = new Note({
        title: req.body.title || "Untitled note",
        content: req.body.content
    });

    // Save note in the database
    note.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Note."
            });
        });
}

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {

}

// Find a single note with a noteId
exports.findOne = (req, res) => {

}

// Update a note identified by the noteId in the request
exports.update = (req, res) => {

}

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {

}