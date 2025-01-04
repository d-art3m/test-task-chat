import express from 'express';
import dotenv from 'dotenv';
import connectToDB from './config/db.js';
import chatRoutes from './routes/chat.routes.js';

const app = express();

dotenv.config();
const PORT = process.env.PORT || 4000;

connectToDB();
app.use(express.json());

app.use('/api/chats', chatRoutes);

app.listen(PORT, () => {});