const express = require('express');
const server = express();

// middleware express.json looks at request for json data and puts it in .body
server.use(express.json());
server.use(logger);

// import router and apply route
const userRouter = require('./users/userRouter.js');
server.use('/api/users', userRouter);

// test server is up
server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

// custom middleware applied in order - important!
// next function introduced and ends the function

function logger(req, res, next) {
  console.log(req.method, req.url, Date.now())
  next();
};

module.exports = server;
