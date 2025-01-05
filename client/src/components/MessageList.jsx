import MessageItem from './MessageItem.jsx';
import useChat from '../store/useChat';
import { useEffect } from 'react';
import useMessage from '../store/useMessage.js';

function MessageList() {
  const activeChat = useChat(state => state.activeChat);

  const fetchMessages = useMessage(state => state.fetchMessages);
  const messages = useMessage(state => state.messages);
  const loading = useMessage(state => state.loading);

  useEffect(() => {
    if (activeChat) {
      fetchMessages(activeChat);
    }
  }, [fetchMessages, activeChat]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="message-list">
      {messages.map(message => (
        <MessageItem key={message._id} {...message} />
      ))}
    </div>
  );
}

export default MessageList;
