import { useState } from 'react';
import Sidebar from './componets/Sidebar';
import Navbar from './componets/Navbar';
import SessionsManagement from './componets/SessionManagment';

const App = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [openTab, setOpenTab] = useState('session');
  return (
    <div className="flex">
      <Sidebar isOpen={isOpen} openTab={openTab} setOpenTab={setOpenTab} />
      <div className="flex-1">
        <Navbar toggleSidebar={() => setIsOpen(!isOpen)} />
        <SessionsManagement />
      </div>
    </div>
  );
};

export default App;
