// import {useState} from 'react';
// import {Box} from '@mui/material'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Topbar from './components/topbar/Topbar'
import SidebarLayout from './components/sidebar/SidebarLayout';
import { useProSidebar } from 'react-pro-sidebar';
import Home from './components/pages/home'
import UserList  from './components/pages/userList/UserList';
import User  from './components/pages/user/User';
import NewUser  from './components/pages/newUser/NewUser';
import ProductList  from './components/pages/productList/ProductList';
import Product  from './components/pages/product/Product';
import NewProduct  from './components/pages/newProduct/NewProduct';

function App() {
  const { collapsed, collapseSidebar } = useProSidebar();
  // const [isSidebar, setIsSidebar] = useState(true);
  return (
    <div className="app">
    <BrowserRouter>
      <SidebarLayout collapsed={collapsed} collapseSidebar={collapseSidebar} />
        <main className="content">
          <Topbar collapsed={collapsed}/>
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="/users" element={<UserList />}/>
            <Route path="/user/:userId" element={<User />}/>
            <Route path="/newuser" element={<NewUser />}/>
            <Route path="/products" element={<ProductList />}/>
            <Route path="/product/:productId" element={<Product />}/>
            <Route path="/newproduct" element={<NewProduct />}/>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
