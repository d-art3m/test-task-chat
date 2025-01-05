import ChatItem from './ChatItem.jsx';
import { IoAddOutline } from 'react-icons/io5';

function ChatList() {
  return (
    <div className="chat-list-wrapper">
      <div className="chat-list-header">
        <div className="chat-list-title">Chats</div>
        <button className="add-btn">
          <IoAddOutline />
        </button>
      </div>
      <div className="chat-list">
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
      </div>
    </div>
  );
}

export default ChatList;
