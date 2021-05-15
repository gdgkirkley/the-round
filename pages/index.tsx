import { useUser } from '@auth0/nextjs-auth0';
import Link from 'next/link';

const HomePage = (): React.ReactElement => {
  const { user } = useUser();

  console.log(user);

  return (
    <div>
      <h1>Welcome to The Round!</h1>
      {!user && <Link href="/api/auth/login">Login</Link>}
      {user && (
        <ul>
          <li>
            <Link href="/dashboard">Go to dashboard</Link>
          </li>
          <li>
            <Link href="/api/auth/logout">Logout</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default HomePage;
