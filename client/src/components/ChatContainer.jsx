import ChatHeader from './ChatHeader';
import MessageList from './MessageList';
import NewMessage from './NewMessage';

function ChatContainer() {
  return (
    <div className="chat-container">
      <ChatHeader />
      <MessageList />
      <NewMessage />
    </div>
  );
}

export default ChatContainer;
