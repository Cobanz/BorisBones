import { render, screen } from '@testing-library/react';
import React from 'react';

import App from './App';

test('Renders landing page', () => {
  render(<App />);
  const footer = screen.getByText('GitHub', { exact: false });
  expect(footer).toBeInTheDocument();
});
