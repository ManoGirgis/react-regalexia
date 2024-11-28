const fs = require('fs');
const https = require('https');
const path = require('path');
const express = require('express');

const app = express();

const options = {
    key: fs.readFileSync(path.resolve(__dirname, './cert/private.key')),
    cert: fs.readFileSync(path.resolve(__dirname, './cert/cert.crt')),
};

const buildPath = path.resolve(__dirname, './build');
app.use(express.static(buildPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'));
});

const PORT = 3000;
https.createServer(options, app).listen(PORT, () => {
    console.log(`Server is running at https://localhost:${PORT}`);
});
