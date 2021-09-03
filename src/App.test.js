import { render, screen } from '@testing-library/react';
import React from 'react';

import LandingPage from './LandingPage/LandingPage';

test('Renders landing page', () => {
  render(<LandingPage />);
  const title = screen.getByText('The Peaceful Pursuit of Boris Bone', {
    exact: false,
  });
  expect(title).toBeInTheDocument();
});
