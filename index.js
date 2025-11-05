const express = require('express');
const app = express();

const PORT = 5500;

app.get('/', (req, res) => {
  res.send('Hola Mundo');
})

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));