import {useState} from 'react';
// import {Box} from '@mui/material'
import Topbar from './components/topbar/Topbar'
import SidebarLayout from './components/sidebar/SidebarLayout';
import { useProSidebar } from 'react-pro-sidebar';

function App() {
  const { collapsed, collapseSidebar } = useProSidebar();
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <div className="app">
      <SidebarLayout isSidebar={isSidebar} collapsed={collapsed} collapseSidebar={collapseSidebar} />
        <main className="content">
          <Topbar collapsed={collapsed}/>
        </main>
    </div>
  );
}

export default App;
