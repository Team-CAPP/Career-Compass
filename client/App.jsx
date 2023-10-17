import React from 'react';
import AppForm from './components/AppForm';
import Notes from './components/Notes';

function App() {
  return (
    <div className='App'>
      <div className='Form-Container'>
        <AppForm></AppForm>
        <Notes></Notes>
      </div>
    </div>
  );
}

export default App;
