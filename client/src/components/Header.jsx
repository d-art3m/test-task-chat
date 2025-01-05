import { FaUser } from 'react-icons/fa';

function Header() {
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
      />
    </div>
  );
}

export default Header;
