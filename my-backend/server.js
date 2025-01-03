const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Endpoint to receive user input
app.post('/submit', (req, res) => {
    const userInput = req.body.input;
    console.log(`Received input: ${userInput}`);
    res.status(200).send({ message: 'Input received!' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
