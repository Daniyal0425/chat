// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

let messages = []; // Stores chat messages

// Endpoint to get messages
app.get('/messages', (req, res) => {
  res.json(messages);
});

// Endpoint to post a new message
app.post('/messages', (req, res) => {
  const { user, text } = req.body;
  if (user && text) {
    messages.push({ user, text, timestamp: new Date() });
    res.status(200).json({ success: true });
  } else {
    res.status(400).json({ success: false, message: "Invalid message format" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
