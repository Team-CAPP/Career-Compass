import React from 'react';
import AppForm from './components/AppForm';
import Notes from './components/Notes';
import CreateUser from './pages/CreateUser';
import AppDashboard from './pages/AppDashboard';
import { BrowserRouter, Routes, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    //needs to implement React router to serve login then main application. And Form on button click

    //   <BrowserRouter>
    //   <Routes>
    //     <Route path='/' element={<Layout />} />
    //     <Route index element={<Login />} />
    //     <Route path='/home' element={<Home />} />
    //     <Route path='/trip' element={<Trip />} />
    //   </Routes>
    // </BrowserRouter>

    <div className='App'>
      <div className='Form-Container'>
        {/* <AppForm></AppForm>
        <Notes></Notes> */}
        <CreateUser></CreateUser>
      </div>
    </div>
  );
}

export default App;
