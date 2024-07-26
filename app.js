const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Testing Manual Review, If you see this, it means this is coming through Review stage in the Pipeline'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
