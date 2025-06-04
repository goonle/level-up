import express from 'express';
import notesRoutes from './notes.js'; // path must match your file

const app = express();
app.use(express.json());
app.use('/api', notesRoutes); // this makes your routes available at /api/notes

app.listen(3000, () => console.log('Server is running'));