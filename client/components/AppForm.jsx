import React from 'react';

function AppForm() {
  return (
    <div>
      <form>
        <label>
          Job/Role Title
          <input type='text' name='Job' />
        </label>
        <input type='submit' value='Submit' />
        <label>
          Company
          <input type='text' name='Company' />
        </label>
        <input type='submit' value='Submit' />
        <label>
          Application URL
          <input type='text' name='URL' />
        </label>
        <input type='submit' value='Submit' />
        <label>
          Application Deadline
          <input type='text' name='Deadline' />
        </label>
        <input type='submit' value='Submit' />
        <label>
          Salary
          <input type='text' name='Salary' />
        </label>
        <input type='submit' value='Submit' />
        <label>
          Location
          <input type='text' name='Location' />
        </label>
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
}

export default AppForm;
