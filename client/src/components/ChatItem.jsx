import { FaUser } from 'react-icons/fa';
import { MdEdit } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';

function ChatItem() {
  return (
    <div className="chat-item">
      <div className="avatar">
        <FaUser />
      </div>
      <div className="chat-item-content">
        <div>name</div>
        <div>text</div>
      </div>
      <div className="chat-item-date">05.01.25</div>
      <div className="chat-item-buttons">
        <button className="chat-item-btn">
          <MdEdit />
        </button>
        <button className="chat-item-btn">
          <MdDelete />
        </button>
      </div>
    </div>
  );
}

export default ChatItem;
