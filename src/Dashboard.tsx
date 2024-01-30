import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ActiveChat from './components/ActiveChat';

const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (!token) navigate('/login');
  }, [navigate]);
  return (
    <div>
      <Sidebar />
      <ActiveChat />
    </div>
  );
};

export default Dashboard;
