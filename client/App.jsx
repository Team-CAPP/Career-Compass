import React from 'react';
import AppForm from './components/AppForm';
import Notes from './components/Notes';
import CreateUser from './components/CreateUser';
import Login from './components/Login';

function App() {
  return (
    //needs to implement React router to serve login then main application. And Form on button click
    <div className='App'>
      <div className='Form-Container'>
        {/* <AppForm></AppForm>
        <Notes></Notes> */}
        {/* <CreateUser></CreateUser> */}
        <Login></Login>
      </div>
    </div>
  );
}

export default App;
