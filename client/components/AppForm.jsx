import React from 'react';

function AppForm() {
  // where form state will go

  //function to send http request to server.  Creating document


  return (
    <div>
      <form className='Field-Container'>
          <label>
            Job/Role Title
            <input type='text' name='Job' className='Input-Line' />
          </label>
        <label>
          Company
          <input type='text' name='Company' className='Input-Line' />
        </label>
        <label>
          Application URL
          <input type='text' name='URL' className='Input-Line' />
        </label>
        <label>
          Application Deadline
          <input type='text' name='Deadline' className='Input-Line' />
        </label>
        <label>
          Salary
          <input type='text' name='Salary' className='Input-Line' />
        </label>
        <label>
          Location
          <input type='text' name='Location' className='Input-Line' />
        </label>
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
}

export default AppForm;
