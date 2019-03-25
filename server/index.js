const express = require('express');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');
const router = require('./router.js');
const port = 3001;

const app = express();

app.use(morgan('dev'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

app.use('/api', router);

app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(port, () => console.log(`---- Connected to server: Listening on ${port} ----`))