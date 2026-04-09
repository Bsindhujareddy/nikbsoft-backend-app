const db = require('../config/db');

// Place order
exports.placeOrder = (req, res) => {
  const { items, total } = req.body;

  db.query('INSERT INTO orders (total) VALUES (?)', [total], (err, result) => {
    if (err) return res.status(500).send(err);

    const orderId = result.insertId;

    items.forEach(item => {
      db.query(
        'INSERT INTO order_items (order_id, item_id, quantity) VALUES (?, ?, ?)',
        [orderId, item.id, item.quantity]
      );
    });

    res.send("Order placed");
  });
};

// Get orders
exports.getOrders = (req, res) => {
  db.query('SELECT * FROM orders ORDER BY created_at DESC', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};