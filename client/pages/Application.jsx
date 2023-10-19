import React from 'react';
import AppForm from '../components/AppForm';
import Notes from '../components/Notes';
import Navbar from '../components/Navbar';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Application(props) {
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (props.authenticated === false || !props.authenticated) {
  //     navigate('/');
  //   } else {
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
//   });
// }

export default Application;
