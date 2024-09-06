import express from 'express';
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27018')
  .then(() => {
    const app = express();

    const port = 3002
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`)
    })
  })
  .catch(() => console.log('Could not connect to mongo'))
