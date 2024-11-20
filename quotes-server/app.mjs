import express from 'express';
import sequelize from './database.mjs';
import Quote from './models/Quote.mjs';

const app = express();
const port = 3000;

// GET endpoint to retrieve a random quote
app.get('/quote', async (req, res) => {
  try {
    const randomQuote = await Quote.findOne({ order: sequelize.random() });
    if(!randomQuote) {
      return res.status(404).json({ error: 'No quotes found' });
    }
    res.json(randomQuote);
  } catch (error) {
    console.error('Error occurred while retrieving a random quote', error);
    res.status(500).json({ error: error.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});