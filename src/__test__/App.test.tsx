import '@testing-library/jest-dom';

describe('Testing App', () => {
  test('get all envs', () => {
    expect(process.env.VITE_CLERK_PUBLISHABLE_KEY).toBeDefined();
  });
});
