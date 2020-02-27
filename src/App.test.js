import React from 'react';
import { render } from '@testing-library/react';

import App from './App';

test('renders component', () => {
  const { getByText } = render(<App />);
  const componentTitle = getByText(
    /This is landing page with Podcast and Episode/i
  );
  expect(componentTitle).toBeInTheDocument();
});
