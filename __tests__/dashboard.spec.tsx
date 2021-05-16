import { render, screen } from '@testing-library/react';
import Dashboard from 'pages/dashboard';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

jest.mock('@auth0/nextjs-auth0', () => ({
  withPageAuthRequired: jest.fn((user) => user),
}));

describe('<Dashboard />', () => {
  let testWithPageAuthRequired: any;

  beforeAll(() => {
    testWithPageAuthRequired = withPageAuthRequired as jest.MockedFunction<any>;
  });

  it('should call page auth', () => {
    let user = { name: 'Test' };
    testWithPageAuthRequired.mockReturnValueOnce(user);
    render(<Dashboard user={user} />);
    expect(screen.getByText(/test/i)).toBeInTheDocument();
  });
});
