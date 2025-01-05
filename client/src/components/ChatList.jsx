import { useEffect, useState } from 'react';
import ChatItem from './ChatItem.jsx';
import { IoAddOutline } from 'react-icons/io5';
import useChat from '../store/useChat.js';
import ChatDialog from './ChatDialog.jsx';

function ChatList() {
  const fetchChats = useChat(state => state.fetchChats);
  const loading = useChat(state => state.loading);
  const chats = useChat(state => state.chats);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  useEffect(() => {
    fetchChats();
  }, [fetchChats]);

  if (loading) return <div>Loading...</div>;

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
