import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema(
  {
    chatId: { type: mongoose.Schema.Types.ObjectId, ref: 'Chat', required: true },
    text: { type: String, required: true },
    type: { 
      type: String, 
      enum: ['incoming', 'outgoing'], 
      required: true 
    },
  },
  { timestamps: true },
);

const Message = mongoose.model('Message', messageSchema);
export default Message;