import express from "express";
const app = express();
app.use(express.static('public'));
app.use(express.static('view'));
app.set('view engine','ejs');
app.use(express.urlencoded({extended: true}));

const PORT = 4000;

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