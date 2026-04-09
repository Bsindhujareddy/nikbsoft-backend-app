const db = require('../config/db');

// Get menu
exports.getMenu = (req, res) => {
  db.query('SELECT * FROM menu', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

// Add menu item
exports.addMenuItem = (req, res) => {
  const { name, price, category } = req.body;

  db.query(
    'INSERT INTO menu (name, price, category) VALUES (?, ?, ?)',
    [name, price, category],
    (err) => {
      if (err) return res.status(500).send(err);
      res.send("Item added");
    }
  );
};