import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ActiveChat from './components/ActiveChat';
import { useSelector } from 'react-redux';
import { RootState } from './app/store';

const Dashboard = () => {
  const user = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    const token = user.token;
    if (!token) navigate('/login');
  }, [navigate, user.token]);
  return (
    <div>
      <Sidebar />
      <ActiveChat />
    </div>
  );
};

export default Dashboard;
