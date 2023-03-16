// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/trends/trendingsearches', {
            target: 'https://trends.google.co.kr',
            changeOrigin: true,
        }),
    );

    app.use(
        createProxyMiddleware('/common', {
            target: 'https://www.dhlottery.co.kr',
            secure: false,
            changeOrigin: true,
            logLevel: "debug",
            headers: { Connection: 'keep-alive' },
        }),
    );
};
