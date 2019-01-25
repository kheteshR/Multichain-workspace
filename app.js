/* jshint node:
/**
@author: Khetesh Rotangan
@version: 1.0.2
@date: 17/01/2019
@Description: DOIT BlockChain project
**/
//this is the start of the application 
//from here the blockchain enviornment setup would start and our node js port for webservice would also start running

'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();
var cors = require('cors');


app.use(cors({origin: 'http://localhost'}));
app.use(bodyParser.json());
const port = process.env.PORT || 3000;
app.listen(port);

app.use(bodyParser.json());
require('./routes')(router);
app.use('/', router);

console.log(`Api Node running on port ${port}`);
