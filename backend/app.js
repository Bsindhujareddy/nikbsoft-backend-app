require('dotenv').config();
const express = require('express');
const cors = require('cors');

const menuRoutes = require('./routes/menuRoutes');
const orderRoutes = require('./routes/orderRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/menu', menuRoutes);
app.use('/api/orders', orderRoutes);

app.get('/health', (req, res) => res.send("OK"));

app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT}`);
});