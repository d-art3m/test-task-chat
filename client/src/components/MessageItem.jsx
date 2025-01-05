import { format } from 'date-fns';
import { MESSAGE_TYPES } from '../constants/messageTypes';

function MessageItem({ text, type, updatedAt }) {
  return (
    <div className="message-item">
      <div
        className={`message-text ${
          type === MESSAGE_TYPES.OUTGOING
            ? 'outgoing-message'
            : 'incoming-message'
        }`}
      >
        {text}
      </div>
      <div className="message-date">
        {format(new Date(updatedAt), 'MM/dd/yyyy, h:mm a')}
      </div>
    </div>
  );
}

export default MessageItem;
