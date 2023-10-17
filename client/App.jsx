import React from 'react';
import AppForm from './components/AppForm';
import Notes from './components/Notes';

function App() {
  return (
    //needs to implement React router to serve login then main application. And Form on button click
    <div className='App'>
      <div className='Form-Container'>
        <AppForm></AppForm>
        <Notes></Notes>
      </div>
    </div>
  );
}

export default App;
