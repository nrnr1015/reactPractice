// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {

    app.use(
        createProxyMiddleware('/lotto/results', {
            target: 'https://smok95.github.io',
            secure: true,
            changeOrigin: true,
            logLevel: "debug",
            headers: { Connection: 'keep-alive' },
        }),
    );
};
