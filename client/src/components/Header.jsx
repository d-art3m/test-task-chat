import { FaUser } from 'react-icons/fa';
import useChat from '../store/useChat';

function Header() {
  const setSearchQuery = useChat(state => state.setSearchQuery);
  const searchQuery = useChat(state => state.searchQuery);

  return (
    <div className="header-wrapper">
      <div className="header-profile">
        <div className="avatar">
          <FaUser />
        </div>
        <button className="login-btn">Log in</button>
      </div>
      <input
        type="text"
        className="search-input"
        placeholder="Search or start new chat"
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
      />
    </div>
  );
}

export default Header;
