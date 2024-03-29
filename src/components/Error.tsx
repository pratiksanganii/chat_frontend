import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { resetError } from '../app/errorSlice';

const Error = ({ title, subTitle }: { title: string; subTitle: string }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(resetError());
    }, 4000);
  }, [dispatch]);
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        top: '85vh',
        justifyContent: 'flex-end',
        position: 'absolute',
        overflow: 'hidden',
      }}
    >
      <style>{`
      @keyframes example {
        0% {margin-right: -200px;}
        75% {margin-right: 200px;}
        100% {margin-right: -200px;}
      }
      #error {
        animation: example 4s 1;
      }
      `}</style>
      <div
        id='error'
        style={{ width: 'auto', marginRight: '-200px' }}
        className='bg-red-100 border-l-4 border-red-500 text-red-700 p-4'
        role='alert'
      >
        <p className='font-bold'>{title}</p>
        <p>{subTitle}</p>
      </div>
    </div>
  );
};

export default Error;
