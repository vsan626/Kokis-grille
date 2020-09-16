require('dotenv').config();
const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const port = 3001;

const yelp = require('yelp-fusion');
const apiKey = process.env.YELP_API;
const client = yelp.client(apiKey);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/', express.static(path.join(__dirname, '../public')));

app.get('/reviews', (req, res) => {
  axios.get(
    'https://api.yelp.com/v3/businesses/kokis-teppanyaki-grille-tustin/reviews',
    {
      headers: {
        Authorization: `Bearer wC7IFcYY6VZg4E-QTBDPkcLFeVfNnXLKkM7OkNCdnx7mJun2dvGGc0qFvjprnXnCQETa0AY6GZXGCMdbF4AJP7TvPGl3kCTgv9baRB54NLyIrNpSgcVDbQ8uCUVhX3Yx`
      }
    }
  ).then(data => {
    console.log('data', data.data)
    res.send(data.data)
  }).catch(error => {
    console.log('error', error)
    res.status(400).send(error)
  })
});

app.listen(port, () => console.log(`connected to port ${port}`));
