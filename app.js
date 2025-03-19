import express from "express";
// const express = require("express");
// const multer = require("multer");
// const cors = require("cors");
// const path = require("path");
const app = express();
// app.use(cors());
app.use(express.static('public'));
app.use(express.static('view'));
app.set('view engine','ejs');
app.use(express.urlencoded({extended: true}));

const PORT = 5000;

app.listen(PORT, (req,res) => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
app.get('/', (req,res) => {
    res.sendFile(`${import.meta.dirname}/view/home.html`);
});

app.get('/scorebug', (req,res) => {
    res.sendFile(`${import.meta.dirname}/view/scorebug.html`)
});

// app.get('/', (req, res) => {
//     res.sendFile(`${import.meta.dirname}/view/scorebug.html`);
// });



//VIDEO STUFF

// const storage = multer.diskStorage({
//     destination: "uploads/",
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + path.extname(file.originalname));
//     }
// });

// const upload = multer({ storage });

// app.post("/upload", upload.single("video"), (req, res) => {
//     res.json({ message: "Video uploaded successfully", filename: req.file.filename });
// });