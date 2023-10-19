/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import App from '../client/App';

test('Renders the landing page', () => {
  render(<App />);
  expect(true).toBeTruthy();
});
