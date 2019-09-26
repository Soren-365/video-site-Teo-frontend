// This file doesn't go through babel or webpack transformation.
// Make sure the syntax and sources this file requires are compatible with the current node version you are running
// See https://github.com/zeit/next.js/issues/1245 for discussions on Universal Webpack or universal Babel
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
var logger = require('morgan');
require('dotenv').config();
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();



app.prepare().then(() => {
  createServer((req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;

    if (pathname === '/') {
      app.render(req, res, '/', query); 
      console.log("Got a new GET @ /");

      else if (pathname === '/apollo') {
      app.render(req, res, '/apollo', query);
      console.log("Got a new GET @ /apollo");

    } else if (pathname === '/video') {
        app.render(req, res, '/video', query);
        console.log("Got a new GET @ /video");

    } else if (pathname === '/create-account') {
      app.render(req, res, '/create-account', query);
      console.log("Got a new GET @ /create-account");
    }
      else {
      handle(req, res, parsedUrl);
    }
  }).listen(3000, err => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});