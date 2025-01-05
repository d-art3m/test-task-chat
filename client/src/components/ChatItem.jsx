import { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { MdEdit } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';
import ChatDialog from './ChatDialog';
import useChat from '../store/useChat';
import { format } from 'date-fns';

function ChatItem({ _id, firstName, lastName, updatedAt }) {
  const fullName = `${firstName} ${lastName}`;

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  const removeChat = useChat(state => state.removeChat);
  const setActiveChat = useChat(state => state.setActiveChat);

  return (
    <>
      <div className="chat-item" onClick={() => setActiveChat({ _id, firstName, lastName })}>
        <div className="avatar">
          <FaUser />
        </div>
        <div className="chat-item-content">
          <div>{fullName}</div>
        </div>
        <div className="chat-item-date">{format(new Date(updatedAt), 'MMM d, yyyy')}</div>
        <div className="chat-item-buttons">
          <button className="chat-item-btn" onClick={openDialog}>
            <MdEdit />
          </button>
          <button
            className="chat-item-btn"
            onClick={() => {
              removeChat(_id);
            }}
          >
            <MdDelete />
          </button>
        </div>
      </div>

      <ChatDialog
        isOpen={isDialogOpen}
        onClose={closeDialog}
        isNew={false}
        _id={_id}
        firstName={firstName}
        lastName={lastName}
      />
    </>
  );
}

export default ChatItem;
