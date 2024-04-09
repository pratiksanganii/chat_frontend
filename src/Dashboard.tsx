import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ActiveChat from './components/ActiveChat';
import { useSelector } from 'react-redux';
import { RootState } from './app/store';
import { Socket, io } from 'socket.io-client';
import { baseUrl } from './app/backend';

const Dashboard = () => {
  const user = useSelector((state: RootState) => state.user);
  const [client, setClient] = useState<Socket>();
  const navigate = useNavigate();

  useEffect(() => {
    const token = user.token;
    if (!token) navigate('/login');
    else setClient(io('http://localhost:4000'));
  }, [navigate, user.token]);

  useEffect(() => {
    if (client) {
      client.connect();
    }
  }, [client]);

  return (
    <div>
      <Sidebar />
      <ActiveChat client={client} />
    </div>
  );
};

export default Dashboard;
