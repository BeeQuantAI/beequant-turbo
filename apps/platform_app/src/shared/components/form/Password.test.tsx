import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import PasswordField from './Password';

describe('Password Component', () => {
  test('should toggle password visibility', () => {
    const mockInputProp = {
      name: 'password',
      value: '',
      onChange: jest.fn(),
    };
    const mockMetaProp = { touched: false, error: '' };

    render(<PasswordField input={mockInputProp} meta={mockMetaProp} />);

    let passwordInput = screen.getByDisplayValue('');

    expect(passwordInput).toHaveAttribute('type', 'password');

    const toggleButton = screen.getByRole('button');

    fireEvent.click(toggleButton);

    expect(passwordInput).toHaveAttribute('type', 'text');

    fireEvent.click(toggleButton);

    expect(passwordInput).toHaveAttribute('type', 'password');
  });
});
