"use server"
import express from 'express';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config();

const app = express();
app.use(express.json());

const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_KEY!);

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK' });
});

app.get('/api/student/123', (req, res) => {
    res.json({ status: 'OK' });
  });

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});