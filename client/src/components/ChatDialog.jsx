import { useEffect, useRef } from 'react';
import useChat from '../store/useChat';

function ChatDialog(props) {
  const {
    isOpen,
    onClose,
    isNew = true,
    _id = null,
    firstName = '', 
    lastName = ''
  } = props;

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  useEffect(() => {
    if (isOpen && firstNameRef.current) {
      firstNameRef.current.value = firstName;
    }
    if (isOpen && lastNameRef.current) {
      lastNameRef.current.value = lastName;
    }
  }, [isOpen, firstName, lastName]);

  const createChat = useChat(state => state.createChat);
  const updateChat = useChat(state => state.updateChat);

  const handleSubmit = e => {
    e.preventDefault();

    const data = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
    };

    isNew? createChat(data): updateChat(_id, data);

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="dialog-overlay">
      <div className="dialog-box">
        <h3>{isNew ? 'Create chat' : 'Edit chat'}</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            ref={firstNameRef}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            ref={lastNameRef}
            required
          />
          <div className="dialog-actions">
            <button type="submit">{isNew ? 'Create' : 'Save'}</button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ChatDialog;
