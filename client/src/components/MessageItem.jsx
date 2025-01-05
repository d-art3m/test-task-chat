import { format } from 'date-fns';

function MessageItem({ text, updatedAt }) {
  return (
    <div className="message-item">
      <div className="message-text">{text}</div>
      <div className="message-date">{format(new Date(updatedAt), 'MM/dd/yyyy, h:mm a')}</div>
    </div>
  );
}

export default MessageItem;
