# Connect Express.js and PostgreSQL
## 1. Install postgreSQL
```bash
npm install pg
```
Before installing postgreSQL client, I think i need to install postgreSQL.

## 2. Create Note Table
```sql
CREATE TABLE notes (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  content TEXT
);
```
## 3. Create .env file
```
COPY NULL > .env

DB_HOST=localhost
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=mydb
DB_PORT=5432
```

## 4. Install Dependencies and code for DB connection and Calling Code
```bash
# Installing Express to call APIs
npm install express
# Install dotenv to set and use .env file
npm install dotenv
```
```js
//Create db connection code named db.js
import pkg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const { Pool } = pkg;

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

export default pool;
```
```js
//Code for APIs named notes.js
import express from 'express';
import pool from './db.js';

const router = express.Router();

router.get('/notes', async (req, res) => {
  const result = await pool.query('SELECT * FROM notes');
  res.json(result.rows);
});

router.post('/notes', async (req, res) => {
  const { title, content } = req.body;
  const result = await pool.query(
    'INSERT INTO notes (title, content) VALUES ($1, $2) RETURNING *',
    [title, content]
  );
  res.status(201).json(result.rows[0]);
});

export default router;
```
```js
//Code run server
import express from 'express';
import notesRoutes from './notes.js'; // path must match your file

const app = express();
app.use(express.json());
app.use('/api', notesRoutes); // this makes your routes available at /api/notes

app.listen(3000, () => console.log('Server is running'));
```

## 5. Create package.json to set environment
```bash
copy NULL > package.json
```
```json
{
    "type" : "module",
    "scripts" : {
        "start" : "node main.js",
        "dev" : "nodemon main.js",
    }
}
```


## 6. Run main.js by node
```bash
npm start
```
