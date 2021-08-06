require('newrelic');
const compression = require('compression');
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const { createProxyMiddleware } = require('http-proxy-middleware');
const Images = 'http://18.144.11.40:3003';

app.use(compression());
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));
app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  next();
});

app.get('*/dp/:productId', (req, res) => {
  res.sendFile(path.join(__dirname, '/./public/index.html'));
});

app.get('/:productId', (req, res) => {
  res.sendFile(path.join(__dirname, '/./public/index.html'))
});

app.use('/images', createProxyMiddleware({
  target: Images,
  changeOrigin: true
}));

app.listen(port, () => {
  console.log(`Server now listening at http://localhost:${port}`);
});
