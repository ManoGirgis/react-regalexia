const { createProxyMiddleware } = require('http-proxy-middleware');
const fs = require('fs');
const path = require('path');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://your-backend-url',
            changeOrigin: true,
            secure: true,
            ssl: {
                cert: fs.readFileSync(path.resolve(process.env.REACT_APP_SSL_CERT_PATH)),
                key: fs.readFileSync(path.resolve(process.env.REACT_APP_SSL_KEY_PATH)),
            },
        })
    );
};
