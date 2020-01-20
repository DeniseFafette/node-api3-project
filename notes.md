## Setup Envioronment
npm install to download dependencies
add dependencies: npm express

## Setup Server 
-  import express
const express = require('express');
const server = express();

-  create routes and import router
const router = require('path');

- server middleware
server.use(express.json());
server.use('/api/posts', postsRouter);
server.listen(3000, () => console.log('Server is on 3000'));

- start server
npm run server