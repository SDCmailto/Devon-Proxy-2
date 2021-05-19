const express = require('express');
const app = express();
const port = 3002;
const path = require('path');


app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  next();
});
app.get('/', (req, res) => {
  res.send('PROXY SERVER')
})



app.listen(port, () => {
  console.log(`Server now listening at http://localhost:${port}`);
});
