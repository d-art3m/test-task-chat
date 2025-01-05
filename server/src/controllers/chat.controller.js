import Chat from '../models/Chat.js';
import Message from '../models/Message.js';

export const getChats = async (req, res) => {
  try {
    const chats = await Chat.find();

    res.status(200).json(chats);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const createChat = async (req, res) => {
  const { firstName, lastName } = req.body;

  if (!firstName || !lastName) {
    return res.status(400).json({ error: 'First and last names are required' });
  }

  try {
    const newChat = new Chat({ firstName, lastName });
    await newChat.save();

    res.status(201).json(newChat);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const updateChat = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName } = req.body;

  if (!firstName || !lastName) {
    return res.status(400).json({ error: 'First and last names are required' });
  }

  try {
    const updatedChat = await Chat.findByIdAndUpdate(
      id,
      { firstName, lastName },
      { new: true }
    );

    if (!updatedChat) {
      return res.status(404).json({ error: 'Chat not found' });
    }

    res.status(200).json(updatedChat);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const removeChat = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedChat = await Chat.findByIdAndDelete(id);

    if (!deletedChat) {
      return res.status(404).json({ error: 'Chat not found' });
    }

    await Message.deleteMany({ chatId: id });

    res.status(200).json(deletedChat);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};