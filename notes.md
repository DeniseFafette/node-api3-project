## Setup Envioronment
npm install to download dependencies
add dependencies: npm express

## Setup Server 
server.js
import express
- const express = require('express');
- const server = express();

index.js
- const server = require('./server.js');
- server.listen(3000, () => console.log('Server is on port 3000'));

start server
- npm run server

test server on Postman


create routes and import router
- const router = require('path');

server middleware
- server.use(express.json());
- server.use('/api/posts', postsRouter);


