// gown-rental-backend/index.js
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// PostgreSQL connection
const pool = new Pool({
  user: 'your-username',
  host: 'localhost',
  database: 'gown_rental_db',
  password: 'your-password',
  port: 5432,
});

// API Routes
app.get('/gowns', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM gowns');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.post('/rent', async (req, res) => {
  const { gownId, studentId } = req.body;
  try {
    await pool.query(
      'UPDATE gowns SET available = false, rented_by = $1 WHERE id = $2',
      [studentId, gownId]
    );
    res.status(200).send('Gown rented successfully');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
