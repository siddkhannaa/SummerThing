import { render, screen } from '@testing-library/react';
import App from './App';

test('render person 1 text box in app', () => {
  render(<App />);
  const placeholder = screen.getByText(/Summer Fling/i);
  expect(placeholder).toBeInTheDocument();
});
