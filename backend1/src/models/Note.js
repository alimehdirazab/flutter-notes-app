const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
    id: {
        type: String,
        unique: true,
        require: true,
    },
    userid: {
        type: String,
        require: true,
    },
    title: {
        type: String,
        require: true,
    },
    content: {
        type: String,
    },
    dateAdded: {
        type: Date,
        default: Date.now,
    }


});

const noteModel = mongoose.model("Note", noteSchema);

module.exports = noteModel;