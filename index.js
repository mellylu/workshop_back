require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const apiRouter = require('./src/routes');

const cors = require('cors');
var port = process.env.PORT;
const app = express();

app.use(bodyParser.json());

app.use(cors())

app.use('/api/v1/', apiRouter);

app.listen(port, (err) => {
    if (err) {
      console.log(`Errors: ${err}`);
      process.exit(-1);
    }
    console.log(`app is runnning on port ${port}`);
    });