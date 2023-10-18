import React from 'react';
import AppForm from '../components/AppForm';
import Notes from '../components/Notes';
import Navbar from '../components/Navbar';

function Application() {
  return (
    <>
      <div className='navBar'>
        <Navbar />
      </div>
      <div className='Form-Container'>
        <AppForm />
        <Notes />
      </div>
    </>
  );
}

export default Application;
