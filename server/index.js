const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    console.log('Received request at /');
    res.send('OdysSea Server!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});