import express from 'express';
import { getMessages, sendMessage, getRandomQuote } from '../controllers/message.controller.js';

const router = express.Router();

router.get('/random', getRandomQuote);
router.get('/:chatId', getMessages);
router.post('/:chatId', sendMessage);

export default router;