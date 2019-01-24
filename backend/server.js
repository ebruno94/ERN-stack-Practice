import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';

// and create our instances
const app = express();
const router = express.Router();

// set ports
const API_PORT = process.env.API_PORT || 3001;
// config API to use body-parser
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(logger('dev'));

// now set route path & initialize API
router.get('/', (req, res) => {
  res.json({message: 'Hello, World!'});
});

router.get('/test', (req, res) => {
  res.json({message: 'You\'re in test!'});
})

router.get('/square', (req, res) => {
  const input = req.query.input
  console.log(req.query)
  res.json({message: input*input })
})

app.use('/api', router);

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));
