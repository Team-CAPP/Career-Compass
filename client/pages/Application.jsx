import React from 'react';
import AppForm from '../components/AppForm';
import Notes from '../components/Notes';

function Application() {
  return (
    <>
      <div className='Form-Container'>
        <AppForm />
        <Notes />
      </div>
    </>
  );
}

export default Application;
