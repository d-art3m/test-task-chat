import { useEffect, useState } from 'react';
import ChatItem from './ChatItem.jsx';
import { IoAddOutline } from 'react-icons/io5';
import useChat from '../store/useChat.js';
import ChatDialog from './ChatDialog.jsx';
import Preloader from './Preloader.jsx';

function ChatList() {
  const getChats = useChat(state => state.getChats);
  const loading = useChat(state => state.loading);
  const chats = useChat(state => state.chats);
  const searchQuery = useChat(state => state.searchQuery);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  useEffect(() => {
    getChats();
  }, [getChats, searchQuery]);

  if (loading) {
    return (
      <div className="chat-list-wrapper">
        <Preloader />
      </div>
    );
  }

  return (
    <div className="chat-list-wrapper">
      <div className="chat-list-header">
        <div className="chat-list-title">Chats</div>
        <button className="add-btn" onClick={openDialog}>
          <IoAddOutline />
        </button>
      </div>
      <div className="chat-list">
        {chats.map(chat => (
          <ChatItem key={chat._id} {...chat} />
        ))}
      </div>

      <ChatDialog isOpen={isDialogOpen} onClose={closeDialog} />
    </div>
  );
}

export default ChatList;
