import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Mediterranean link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Mediterranean/);
  expect(linkElement).toBeInTheDocument();
});
