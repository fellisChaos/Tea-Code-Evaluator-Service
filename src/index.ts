import express from 'express';
import { PORT } from './config/serverConfig';
import apiRouter from './routes/apiRouter';
import sampleQueueProducer from './producers/sampleQueueProducer';
import SampleWorker from './workers/SampleWorker';

const app = express();

app.use('/api', apiRouter);

app.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}`);

  SampleWorker('SampleQueue');

  sampleQueueProducer('SampleJob', {
    name: 'felisChaos',
    company: 'Google',
    position: 'SDE 2',
    location: 'Remote | Noida',
  });
});
