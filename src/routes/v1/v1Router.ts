import express from 'express';
import { pingCheck } from '../../controllers/pingController';

const v1Router = express.Router();

v1Router.use('/', pingCheck);

export default v1Router;
