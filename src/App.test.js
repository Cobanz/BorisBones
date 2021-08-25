import { render, screen } from '@testing-library/react';
import App from './App/App';

test('Renders landing page', () => {
  render(<App />);
  const header = screen.getByText('Hello, world!');
  expect(header).toBeInTheDocument();
});
