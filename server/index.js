const express = require('express');
const cors = require('cors');
const app = express();

const port = process.env.PORT || 3000;
const allowedOrigins = ['http://localhost:5173'];
const corsOptions = {
  origin: allowedOrigins,
  credentials: true,
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  console.log('Received request at /');
  res.send('Hey OdysSea Server!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});