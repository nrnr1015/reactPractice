// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/users', {
      target: 'https://jsonplaceholder.typicode.com',
      changeOrigin: true,
    }),
  );
};