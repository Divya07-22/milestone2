const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Example endpoint
app.get('/api/data', (req, res) => {
  const data = { message: 'Hello from the backend!' };
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
