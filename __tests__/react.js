/**
 * @jest-environment jsdom
 */
//import testing tools
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
//import components
import App from '../client/App';
import AppForm from '../client/components/AppForm.jsx';
import CreateUser from '../client/components/CreateUser.jsx';
import Notes from '../client/components/Notes.jsx';

// Unit tests
test('Renders the landing page', () => {
  render(<App />);
  expect(true).toBeTruthy();
});

describe('Unit testing for React Components', () => {
  describe('CreateUser component', () => {
    beforeEach(async () => {
      const app = await render(<App />);
    });

    test('The page loads with 3 input fields and a submit button', () => {
      const inputFields = screen.getAllByRole('textbox');
      expect(inputFields.length).toBe(3);

      const submitButton = screen.getByText('Submit');
      expect(submitButton).toBeInTheDocument();
    });

    // test('The submit button is disabled when the username and password fields are empty', () => {
    //   const submitButton = screen.getByText('Submit');
    //   expect(submitButton).toBeDisabled();
    // });
  });
});

describe('AppForm component', () => {
  beforeEach(async () => {
    const app = await render(<AppForm />);
  });

  test('The page loads with 6 input fields and a submit button', () => {
    const inputFields = screen.getAllByRole('textbox');
    expect(inputFields.length).toBe(6);

    const submitButton = screen.getByText('Submit');
    expect(submitButton).toBeInTheDocument();
  });
});

describe('Notes component', () => {
  beforeEach(async () => {
    const app = await render(<Notes />);
  });

  test('Notes h1 should be Notes:', () => {
    const h1 = screen.getByText('Notes:');
    expect(h1).toBeInTheDocument();
  });
});

describe('Testing createUser form POST request', () => {
  describe('CreateUser component', () => {
    const server = setupServer(
      rest.post('/api/createUser', async (req, res, ctx) => {
        // Assert that the request body contains the correct data
        const requestBody = await req.json();
        expect(requestBody.username).toBe('username');
        expect(requestBody.password).toBe('password');
        expect(requestBody.email).toBe('email');

        // Return a successful response
        return res(ctx.status(201));
      }),
    );

    beforeAll(() => {
      server.listen();
    });

    afterAll(() => {
      server.close();
    });

    it('should send a post request to the backend with the correct data', async () => {
      // Render the CreateUser component
      render(<CreateUser />);

      // Fill in the form fields and click the submit button
      const usernameInputField = screen.getByLabelText('Username');
      const passwordInputField = screen.getByLabelText('Password');
      const emailInputField = screen.getByLabelText('Email');
      usernameInputField.value = 'username';
      passwordInputField.value = 'password';
      emailInputField.value = 'email';
      const submitButton = screen.getByText('Submit');
      submitButton.click();

      // Wait for the post request to complete
      await server.waitForRequestHandler('/api/createUser');

      // Assert that the post request was successful
      expect(server.requests.count()).toBe(1);
      const request = server.requests[0];
      expect(request.method).toBe('POST');
      expect(request.url.toString()).toBe(
        'http://localhost:8080/api/createUser',
      );
    });
  });
});
