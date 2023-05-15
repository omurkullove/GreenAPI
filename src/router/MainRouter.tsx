import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Preview from 'pages/Preview';
import Home from 'pages/Home';
import Chat from 'pages/Chat';

const MainRouter: FC = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Preview />} />
        <Route path='/home-page' element={<Home />} />
        <Route path='/chat-page/:id' element={<Chat />} />
      </Routes>
    </>
  );
};
export default MainRouter;
