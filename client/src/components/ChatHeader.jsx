import { FaUser } from 'react-icons/fa';
import useChat from '../store/useChat';

function ChatHeader() {
  const activeChat = useChat(state => state.activeChat);
  
  let fullName = '';
  if (activeChat) {
    fullName = `${activeChat.firstName} ${activeChat.lastName}`;
  }

  return (
    <div className="chat-header">
      <div className="avatar">
        <FaUser />
      </div>
      <div className="chat-header-content">{fullName}</div>
    </div>
  );
}

export default ChatHeader;
