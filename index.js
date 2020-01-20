// code away!

const express = require('express');
const server = express();

server.use(express.json());
server.listen(3000, () => console.log('Server is on port 3000'));