//Initialization
const express = require('express');
const app = express();

const mongoose = require('mongoose');
const Note = require('./models/Note');
// const cors = require("cors");
// app.use(cors({
//     origin: 'http://localhost:49159/'
// }));


const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

try {
    mongoose.connect("mongodb+srv://alimehdirazab:alipass@cluster0.3ih62mr.mongodb.net/notesdb").then(function () {
        //app routes

        app.get('/', function (req, res) {
            const response = { massage: "Api Works" };
            res.json(response);
        });

        const noteRouter = require('./routes/Note');
        app.use("/notes", noteRouter);

    });
} catch (e) {
    console.log(e);
}


//starting the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
    console.log('server is runing on post ' + PORT);
});