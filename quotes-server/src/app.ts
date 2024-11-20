import express, { Request, Response } from 'express';
import sequelize from '@/src/database';
import Quote from '@/src/models/Quote';

const app = express();
const port = 3000;

// GET endpoint to retrieve a random quote
app.get('/quote', async (req: Request, res: Response) => {
  try {
    const randomQuote = await Quote.findOne({ order: sequelize.random() });
    if(!randomQuote) {
      return res.status(404).json({ error: 'No quotes found' });
    }
    res.json(randomQuote);
  } catch (error) {
    let errorMessage;
    if(error instanceof Error) {
      errorMessage = error.message;
    } else {
      errorMessage = 'Server error';
    }
    console.error('Error occurred while retrieving a random quote', errorMessage);
    res.status(500).json({ error: errorMessage });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});