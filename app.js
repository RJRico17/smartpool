import express from "express";
const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

const PORT = 3001;

app.listen(PORT, (req,res) => {
    console.log(`Server is running at http://localhost:${PORT}`);
})

app.get('/', (req, res) => {
    res.sendFile(`${import.meta.dirname}/view/home.html`);
})