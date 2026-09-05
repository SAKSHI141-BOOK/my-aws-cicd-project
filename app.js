const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello World! AWS EC2 CICD Done!</h1>');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
