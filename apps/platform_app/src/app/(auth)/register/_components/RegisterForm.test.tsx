import { render, fireEvent, waitFor } from '@testing-library/react';
import { useUserContext } from '@/hooks/userHooks';
import RegisterForm from './RegisterForm';

const mockLocalStorage = (() => {
  let store: Record<string, string> = {};
  return {
    getItem(key: string): string | null {
      return store[key] || null;
    },
    setItem(key: string, value: string): void {
      store[key] = value.toString();
    },
    clear(): void {
      store = {};
    },
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: mockLocalStorage,
});

jest.mock('@/hooks/userHooks', () => ({
  useUserContext: jest.fn(),
}));

beforeEach(() => {
  (useUserContext as jest.Mock).mockImplementation(() => ({
    store: { themeColor: 'dark' },
    setStore: jest.fn(),
  }));

  localStorage.setItem('THEME', 'dark');
});

afterEach(() => {
  jest.clearAllMocks();
  localStorage.clear();
});

jest.mock('@/styles/directions', () => ({
  right: jest.fn().mockReturnValue('right'),
}));

jest.mock('mdi-react/AccountOutlineIcon', () => ({
  __esModule: true,
  default: () => <div>Mocked AccountOutlineIcon</div>,
}));

jest.mock('mdi-react/EyeIcon', () => ({
  __esModule: true,
  default: () => <div>Mocked EyeIcon</div>,
}));

jest.mock('mdi-react/KeyVariantIcon', () => ({
  __esModule: true,
  default: () => <div>Mocked KeyVariantIcon</div>,
}));

jest.mock('@/config/config', () => ({
  config: {
    referenceName: 'mocked_reference_name',
  },
}));

describe('RegisterForm component', () => {
  it('should render the register form and the button correctly', () => {
    const { getByText } = render(<RegisterForm onSubmit={() => {}} error="" />);
    expect(getByText('Sign Up')).toBeInTheDocument();
  });

  it('renders all input fields correctly', () => {
    const { getByPlaceholderText } = render(<RegisterForm onSubmit={() => {}} error="" />);
    expect(getByPlaceholderText('Display Name')).toBeInTheDocument();
    expect(getByPlaceholderText('Email')).toBeInTheDocument();
    expect(getByPlaceholderText('Password')).toBeInTheDocument();
    expect(getByPlaceholderText('Repeat Password')).toBeInTheDocument();
    expect(getByPlaceholderText('Reference')).toBeInTheDocument();
  });
});

describe('Form validation', () => {
  it('should render "This is a required field", because Email is missing', async () => {
    const onSubmitMock = jest.fn();

    const { getByPlaceholderText, getByText } = render(
      <RegisterForm onSubmit={onSubmitMock} error="" />
    );

    fireEvent.change(getByPlaceholderText('Display Name'), { target: { value: 'John Doe' } });
    fireEvent.change(getByPlaceholderText('Password'), { target: { value: 'password123!' } });
    fireEvent.change(getByPlaceholderText('Repeat Password'), {
      target: { value: 'password123!' },
    });
    fireEvent.change(getByPlaceholderText('Reference'), { target: { value: 'ref123' } });

    fireEvent.click(getByText('Sign Up'));

    await waitFor(() => {
      expect(getByText('This is a required field')).toBeInTheDocument();
    });
  });

  it('should render "This is a required field", because Repeat Password is missing', async () => {
    const onSubmitMock = jest.fn();

    const { getByPlaceholderText, getByText } = render(
      <RegisterForm onSubmit={onSubmitMock} error="" />
    );

    fireEvent.change(getByPlaceholderText('Display Name'), { target: { value: 'John Doe' } });
    fireEvent.change(getByPlaceholderText('Email'), { target: { value: 'john@example.com' } });
    fireEvent.change(getByPlaceholderText('Password'), { target: { value: 'password123!' } });
    fireEvent.change(getByPlaceholderText('Reference'), { target: { value: 'ref123' } });

    fireEvent.click(getByText('Sign Up'));

    await waitFor(() => {
      expect(getByText('This is a required field')).toBeInTheDocument();
    });
  });

  it('should render "must contain 8 to 32 characters, including letter, number and special character", Password does not meet the requirement', async () => {
    const onSubmitMock = jest.fn();

    const { getByPlaceholderText, getByText } = render(
      <RegisterForm onSubmit={onSubmitMock} error="" />
    );

    fireEvent.change(getByPlaceholderText('Display Name'), { target: { value: 'John Doe' } });
    fireEvent.change(getByPlaceholderText('Email'), { target: { value: 'john@example.com' } });
    fireEvent.change(getByPlaceholderText('Password'), { target: { value: 'password123' } });
    fireEvent.change(getByPlaceholderText('Repeat Password'), { target: { value: 'password123' } });
    fireEvent.change(getByPlaceholderText('Reference'), { target: { value: 'ref123' } });

    fireEvent.click(getByText('Sign Up'));

    await waitFor(() => {
      expect(
        getByText('must contain 8 to 32 characters, including letter, number and special character')
      ).toBeInTheDocument();
    });
  });

  it('should render "The passwords do not match", because the Repeat Password do not match the Passwords ', async () => {
    const onSubmitMock = jest.fn();

    const { getByPlaceholderText, getByText } = render(
      <RegisterForm onSubmit={onSubmitMock} error="" />
    );

    fireEvent.change(getByPlaceholderText('Display Name'), { target: { value: 'John Doe' } });
    fireEvent.change(getByPlaceholderText('Email'), { target: { value: 'john@example.com' } });
    fireEvent.change(getByPlaceholderText('Password'), { target: { value: 'password123!' } });
    fireEvent.change(getByPlaceholderText('Repeat Password'), { target: { value: 'password123' } });
    fireEvent.change(getByPlaceholderText('Reference'), { target: { value: 'ref123' } });

    fireEvent.click(getByText('Sign Up'));

    await waitFor(() => {
      expect(getByText('The passwords do not match')).toBeInTheDocument();
    });
  });
});

describe('Form submission', () => {
  it('should call onSubmit prop when form is submitted', async () => {
    const onSubmitMock = jest.fn();

    const { getByPlaceholderText, getByText } = render(
      <RegisterForm onSubmit={onSubmitMock} error="" />
    );

    fireEvent.change(getByPlaceholderText('Display Name'), { target: { value: 'John' } });
    fireEvent.change(getByPlaceholderText('Email'), { target: { value: 'john@example.com' } });
    fireEvent.change(getByPlaceholderText('Password'), { target: { value: 'password123!' } });
    fireEvent.change(getByPlaceholderText('Repeat Password'), {
      target: { value: 'password123!' },
    });
    fireEvent.change(getByPlaceholderText('Reference'), { target: { value: 'ref123' } });

    fireEvent.click(getByText('Sign Up'));

    await waitFor(() => {
      expect(onSubmitMock).toHaveBeenCalled();

      expect(onSubmitMock).toHaveBeenCalledWith({
        displayName: 'John',
        email: 'john@example.com',
        password: 'password123!',
        ref: 'ref123',
      });
    });
  });
});
