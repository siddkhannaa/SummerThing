import { render, screen } from '@testing-library/react';
import App from './App';

test('render page title', () => {
  render(<App />);
  const placeholder = screen.getByText(/Summer Fling/i);
  expect(placeholder).toBeInTheDocument();
});
