import { FaUser } from 'react-icons/fa';

function ChatHeader() {
  return (
    <div className="chat-header">
      <div className="avatar">
        <FaUser />
      </div>
      <div className="chat-header-content">Name Surname</div>
    </div>
  );
}

export default ChatHeader;
