import React, { useState } from 'react';

function AppForm() {
  // where form state will go
  const [job, setJob] = useState('');
  const [company, setCompany] = useState('');
  const [url, setURL] = useState('');
  const [deadline, setDeadline] = useState('');
  const [salary, setSalary] = useState('');
  const [location, setLocation] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'Job':
        setJob(value);
        break;
      case 'Company':
        setPassword(value);
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
        job,
        company,
        url,
        deadline,
        salary,
        location,
      }),
    });
  };
  //function to send http request to server.  Creating document

  return (
    <div>
      <form className='Field-Container'>
        <label>
          Job/Role Title *
          <input
            type='text'
            name='Job'
            className='Input-Line'
            value={job}
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
            value={deadline}
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
