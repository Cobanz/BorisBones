import { render, screen } from '@testing-library/react';

import App from './App/App';

test('Renders landing page', () => {
  render(<App />);
  const footer = screen.getByText('hi');
  expect(footer).toBeInTheDocument();
});
