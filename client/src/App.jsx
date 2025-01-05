import Sidebar from './components/Sidebar.jsx';
import ChatContainer from './components/ChatContainer.jsx';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="wrapper">
      <Sidebar />
      <ChatContainer />
      <ToastContainer />
    </div>
  );
}

export default App;
