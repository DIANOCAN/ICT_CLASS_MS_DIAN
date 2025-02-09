import React from 'react';
import Layout from '../../components/Layout';
import { Routes, Route } from 'react-router-dom';

import MenuManagement from './MenuManagement';
import RegistrationMemberPage from './RegistrationMember';


import '../../styles/dashboard.css'

const Dashboard = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<h2>Welcome to the Dashboard</h2>} />
        <Route path="/menu-management" element={<MenuManagement />} />
        <Route path="/register-member" element={<RegistrationMemberPage />} />  {/* Add the new registration route */}
        {/* Add other routes here */}
      </Routes>
    </Layout>
  );
};

export default Dashboard;