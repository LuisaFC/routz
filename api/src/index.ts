import express from 'express';
import mongoose from 'mongoose';
import { router } from './routes';

mongoose.connect('mongodb://localhost:27018')
  .then(() => {
    const app = express();

    app.use(express.json())
    app.use(router)

    const port = 3002
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`)
    })
  })
  .catch(() => console.log('Could not connect to mongo'))
