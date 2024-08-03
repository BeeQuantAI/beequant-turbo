import { AUTH_TOKEN, REMEMBER_ME } from '../constants/storage';

const parseJwt = (token: string) => {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split('')
      .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
      .join('')
  );

  return JSON.parse(jsonPayload);
};

const isJWTExpired = (token: string) => {
  const { exp } = parseJwt(token);
  return exp * 1000 < new Date().getTime();
};

const isAuthenticated = (): boolean => {
  const rememberMe = typeof window !== 'undefined' ? localStorage.getItem(REMEMBER_ME) : null;
  // const rememberMe = localStorage.getItem(REMEMBER_ME);
  let token;
  if (rememberMe === 'true') {
    token = typeof window !== 'undefined' ? localStorage.getItem(AUTH_TOKEN) : null;
  } else {
    token = typeof window !== 'undefined' ? sessionStorage.getItem(AUTH_TOKEN) : null;
  }
  if (!token) return false;
  if (isJWTExpired(token)) return false;
  return true;
};

export { isAuthenticated, isJWTExpired };
