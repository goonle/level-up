import express from 'express';
import pool from './db.js';

const router = express.Router();
console.info("Router initialized");

router.get('/notes', async (req, res) => {
  const result = await pool.query('SELECT * FROM notes');
  res.json(result.rows);
  console.info("Fetched notes:", result.rows);
});

router.post('/notes', async (req, res) => {
  const { title, content } = req.body;
  const result = await pool.query(
    'INSERT INTO notes (title, content) VALUES ($1, $2) RETURNING *',
    [title, content]
  );
  res.status(201).json(result.rows[0]);
  console.info("Fetched notes:", result);

});

export default router;