import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Main App file', () => {
  render(<App />);
  const MainBody = screen.getByTestId("AppMainContainer");
  expect(MainBody).toBeInTheDocument();
});
