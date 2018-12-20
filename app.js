const http = require('http');
const https = require('https');
const fs = require('fs');
const express = require('express');

global.__base = __dirname;
global.nodeEnv = process.env.NODE_ENV || 'development';

let config = require('./config/' + nodeEnv);
let app = express();

let server = http.createServer(app).listen(config.http.port, err => {
    if (err) {
        return console.log('something bad happened', err)
    }

    console.log(`server is listening on ${config.http.port}`);
});