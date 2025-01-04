import express from 'express';
import { getChats, createChat, updateChat, removeChat } from '../controllers/chat.controller.js';

const router = express.Router();

router.get('/', getChats);
router.post('/', createChat);
router.put('/:id', updateChat);
router.delete('/:id', removeChat);

export default router;