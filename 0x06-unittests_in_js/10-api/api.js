const express = require('express');

const app = express();
const port = 7865;

app.use(express.json());

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
  const { id } = req.params;
  res.set('Content-Type', 'text/plain');
  res.send(`Payment methods for cart ${id}`);
});

app.get('/available_payments', (req, res) => {
  res.json({ payment_methods: { credit_cards: true, paypal: false } });
});

app.post('/login', (req, res) => {
  const { userName } = req.body;
  if (!userName) {
    return res.status(400).send('Username is required');
  }
  res.send(`Welcome ${userName}`);
});

app.listen(port, () => {
  console.log('API available on localhost port 7865');
});

module.exports = app;
