import { UserProfile, withPageAuthRequired } from '@auth0/nextjs-auth0';
import Link from 'next/link';

const Dashboard = ({ user }: { user: UserProfile }): React.ReactElement => {
  return (
    <div>
      <p>Welcome, {user.name}!</p>
      <p>
        <Link href="/">Return home</Link>
      </p>
    </div>
  );
};

export const getServerSideProps = withPageAuthRequired();

export default Dashboard;
