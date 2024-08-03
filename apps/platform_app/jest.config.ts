import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const config: Config = {
  //coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  // Add more setup options before each test is run
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  preset: 'ts-jest',
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.ts',
    '\\.(gif|ttf|eot|svg)$': '<rootDir>/__mocks__/fileMock.ts',
  },
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: './tsconfig.json',
        diagnostics: {
          ignoreCodes: ['TS2739'],
        },
      },
    ],
    '^.+\\.(png|jpg|jpeg|gif|svg)$': 'jest-transform-stub',
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
