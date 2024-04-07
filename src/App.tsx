import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Error from './components/Error';
import { useSelector } from 'react-redux';
import { RootState } from './app/store';

function App() {
  const error = useSelector((state: RootState) => state.error);
  return (
    <div
      className='App bg-gray-700 text-cyan-50'
      style={{ height: '100vh', width: '100vw' }}
    >
      {error.show && <Error title={error.title} subTitle={error.sub_title} />}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
