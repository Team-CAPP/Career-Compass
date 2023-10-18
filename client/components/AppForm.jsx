import React, { useState } from 'react';

function AppForm() {
  // where form state will go
  const [role, setRole] = useState('');
  const [company, setCompany] = useState('');
  const [url, setURL] = useState('');
  const [app_deadline, setDeadline] = useState('');
  const [salary, setSalary] = useState('');
  const [location, setLocation] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'Role':
        setRole(value);
        break;
      case 'Company':
        setCompany(value);
        break;
      case 'URL':
        setURL(value);
        break;
      case 'Deadline':
        setDeadline(value);
        break;
      case 'Salary':
        setSalary(value);
        break;
      case 'Location':
        setLocation(value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = async event => {
    event.preventDefault();

    const response = await fetch('/api/application', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        role,
        company,
        url,
        app_deadline,
        salary,
        location,
      }),
    });
    console.log(response.status);
  };
  //function to send http request to server.  Creating document

  return (
    <div>
      <form className='Field-Container'>
        <label>
          Job/Role Title *
          <input
            type='text'
            name='Role'
            className='Input-Line'
            value={role}
            onChange={handleChange}
          />
        </label>
        <label>
          Company *
          <input
            type='text'
            name='Company'
            className='Input-Line'
            value={company}
            onChange={handleChange}
          />
        </label>
        <label>
          Application URL
          <input
            type='text'
            name='URL'
            className='Input-Line'
            value={url}
            onChange={handleChange}
          />
        </label>
        <label>
          Application Deadline
          <input
            type='text'
            name='Deadline'
            className='Input-Line'
            value={app_deadline}
            onChange={handleChange}
          />
        </label>
        <label>
          Salary
          <input
            type='text'
            name='Salary'
            className='Input-Line'
            value={salary}
            onChange={handleChange}
          />
        </label>
        <label>
          Location
          <input
            type='text'
            name='Location'
            className='Input-Line'
            value={location}
            onChange={handleChange}
          />
        </label>
        <input type='submit' value='Submit' onClick={handleSubmit} />
      </form>
    </div>
  );
}

export default AppForm;
