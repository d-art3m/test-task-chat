import { useRef } from 'react';
import useChat from '../store/useChat';
import useMessage from '../store/useMessage';
import { MESSAGE_TYPES } from '../constants/messageTypes';
import { getRandomQuote } from '../utils/quoteService';

function NewMessage() {
  const messageInput = useRef(null);

  const activeChat = useChat(state => state.activeChat);

  const sendMessage = useMessage(state => state.sendMessage);
  const loading = useMessage(state => state.loading);

  const handleSubmit = async () => {
    const messageText = messageInput.current.value.trim();
    if (!messageText) return;
    messageInput.current.value = '';

    sendMessage(activeChat, {
      text: messageText,
      type: MESSAGE_TYPES.OUTGOING,
    });

    setTimeout(async () => {
      const randomQuote = await getRandomQuote();

      sendMessage(activeChat, {
        text: randomQuote,
        type: MESSAGE_TYPES.INCOMING,
      });
    }, 3000);
  };

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSubmit();
    }
  };

  if (!activeChat || loading) return;

  return (
    <div className="new-message-wrapper">
      <input
        type="text"
        className="new-message-input"
        placeholder="Type your message"
        ref={messageInput}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default NewMessage;
