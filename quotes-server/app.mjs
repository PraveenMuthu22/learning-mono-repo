import express from 'express';
import sequelize from './database.mjs';
import Quote from './models/Quote.mjs';

const app = express();
const port = 3000;

// Hardcoded array of quotes
// const quotes = [
//   { quote: 'The only way to do great work is to love what you do.', author: 'Steve Jobs' },
//   { quote: 'Success is not the key to happiness. Happiness is the key to success.', author: 'Albert Schweitzer' },
//   { quote: 'Believe you can and you\'re halfway there.', author: 'Theodore Roosevelt' },
//   { quote: 'It does not matter how slowly you go as long as you do not stop.', author: 'Confucius' },
//   { quote: 'You miss 100% of the shots you don’t take.', author: 'Wayne Gretzky' }
// ];

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