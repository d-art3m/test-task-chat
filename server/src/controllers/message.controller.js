import Message from '../models/Message.js';

export const getMessages = async (req, res) => {
  const { chatId } = req.params;
  
  try {
    const messages = await Message.find({ chatId }).sort({ createdAt: 1 });

    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const sendMessage = async (req, res) => {
  const { chatId } = req.params;
  const { text, type } = req.body;

  if (!text || !type) {
    return res.status(400).json({ error: 'Text and type are required' });
  }

  try {
    const newMessage = new Message({ text, chatId, type });
    await newMessage.save();

    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};