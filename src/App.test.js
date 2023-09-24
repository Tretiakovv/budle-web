import { render, screen } from '@testing-library/react';
import EstablishmentListScreen from './components/screens/admin-panel/establishment-list/screen/EstablishmentListScreen';

test('renders learn react link', () => {
  render(<EstablishmentListScreen />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
