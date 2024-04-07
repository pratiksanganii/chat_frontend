import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../app/userSlice';
import { showError } from '../app/errorSlice';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../app/store';

const Login = () => {
  const user = useSelector((state: RootState) => state.user);
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const dispatch: any = useDispatch();
  const navigate = useNavigate();
  const submit = (e: any) => {
    e.preventDefault();
    dispatch(login({ phone, password }));
  };
  useEffect(() => {
    const token = user.token;
    if (token) navigate('/');
  }, [navigate, user.token]);

  return (
    <div style={{ width: '100vw', height: '90vh', display: 'flex' }}>
      <div
        className='sm:mx-auto sm:w-full sm:max-w-sm'
        style={{
          border: '1px solid',
          padding: '10px',
          borderRadius: '10px',
          margin: 'auto auto',
        }}
      >
        <div
          style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '25px' }}
        >
          <h1>Login</h1>
        </div>
        <form className='space-y-6' onSubmit={submit}>
          <div>
            <label
              htmlFor='phone'
              className='block text-sm font-medium leading-6 text-custom-blue'
            >
              Phone
            </label>
            <div className='mt-2'>
              <input
                id='phone'
                name='phone'
                autoComplete='phone'
                required
                value={phone}
                onChange={(e) => {
                  if (!isNaN(+e.target.value)) setPhone(e.target.value);
                  else
                    dispatch(
                      showError({
                        title: 'Invalid phone',
                        sub_title: 'Phone must be number.',
                      })
                    );
                }}
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2'
              />
            </div>
          </div>

          <div>
            <div className='flex items-center justify-between'>
              <label
                htmlFor='password'
                className='block text-sm font-medium leading-6 text-custom-blue'
              >
                Password
              </label>
            </div>
            <div className='mt-2'>
              <input
                id='password'
                name='password'
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete='current-password'
                required
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2'
              />
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button
              type='submit'
              className='flex mx-3 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              Sign in
            </button>
            <button
              onClick={() => {
                navigate('/signup');
              }}
              className='flex border border-3 justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
