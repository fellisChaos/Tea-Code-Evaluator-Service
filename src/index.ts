import express from 'express';
import { PORT } from './config/serverConfig';
import apiRouter from './routes/apiRouter';

const app = express();

app.use('/api', apiRouter);

app.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}`);
});
