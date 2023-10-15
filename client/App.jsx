import React from 'react';
import AppForm from './components/AppForm';
import Notes from './components/Notes';
import AppDashboard from './components/AppDashboard';


function App() {
  return (
    //needs to implement React router to serve login then main application. And Form on button click
    <div className='App'>
      <div className='Form-Container'>
        {/* <AppForm></AppForm>
        <Notes></Notes> */}
        <AppDashboard></AppDashboard>
      </div>
    </div>
  );
}

export default App;
