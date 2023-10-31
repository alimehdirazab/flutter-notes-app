const express = require('express');
const router = express.Router();
const Note = require("./../models/Note");


router.post('/list', async function (req, res) {
    var notes = await Note.find({ userid: req.body.userid });
    res.json(notes);
});

router.post('/add', async function (req, res) {

    await Note.deleteOne({ id: req.body.id });

    const newNote = new Note({
        id: req.body.id,
        userid: req.body.userid,
        title: req.body.title,
        content: req.body.content,
    });
    await newNote.save();
    const resposne = { massage: "New Note Added" + `id : ${req.body.id}` };
    res.json(resposne);
});

router.post('/delete', async function (req, res) {
    await Note.deleteOne({ id: req.body.id });
    const resposne = { massage: "Note Deleted" + `id : ${req.body.id}` };
    res.json(resposne);
});

module.exports = router;