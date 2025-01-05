import mongoose from 'mongoose';
import Chat from '../models/Chat.js'

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);

    const existingChats = await Chat.countDocuments();
    
    if (existingChats === 0) {
      const defaultChats = [
        { firstName: 'Alice', lastName: 'Freeman' },
        { firstName: 'Josefina', lastName: 'Doe' },
        { firstName: 'Velazquez', lastName: 'Smith' },
      ];

      await Chat.insertMany(defaultChats);
    }

  } catch (error) {
    throw new Error('Connection failed!');
  }
};

export default connectToDB;
