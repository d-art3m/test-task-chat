import mongoose from 'mongoose';

const chatSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  { timestamps: true },
);

const Chat = mongoose.model('Chat', chatSchema);
export default Chat;
