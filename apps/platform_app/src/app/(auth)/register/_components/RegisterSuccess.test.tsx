import { screen, render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useUserContext } from '@/hooks/userHooks';
import RegisterSuccess from './RegisterSuccess';

jest.mock('@/containers/Layout/topbar/BasicTopbarComponents', () => ({
  TopbarDownIcon: () => <div>Mocked TopbarDownIcon</div>,
}));

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

describe('RegisterSuccess component', () => {
  it('should render successfully and show "Your registration is successful"', () => {
    render(
      <Router>
        <RegisterSuccess />
      </Router>
    );

    const successMessage = screen.getByText(/Your registration is successful/i);
    expect(successMessage).toBeInTheDocument();
  });

  it('should render image', () => {
    render(
      <Router>
        <RegisterSuccess />
      </Router>
    );
    const image = screen.getByAltText('success');
    expect(image).toBeInTheDocument();
  });

  it('should render button with correct link', () => {
    const { getByText } = render(
      <Router>
        <RegisterSuccess />
      </Router>
    );
    const button = getByText('Back to Login');
    expect(button).toBeInTheDocument();
    const linkElement = button.closest('a');
    expect(linkElement).toHaveAttribute('href', '/login');
  });
});
