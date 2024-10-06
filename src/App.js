import logo from './logo.svg';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {Routes, Route} from 'react-router-dom';

import PrivateComponent from './components/private-component';
import Home from './pages/home';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import MenuManagement from './pages/dashboard/MenuManagement';
// import DashboardMain from './pages/dashboard/main';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/login' element={<Login />} />
          <Route path="/dashboard/*" element={<Dashboard />}>
            <Route path="menu-management" element={<MenuManagement />} />
            <Route path="register-member" element={<MenuManagement />} />
          </Route> */}
        </Routes>
    </div>
  );
}

export default App;
