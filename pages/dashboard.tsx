import { UserProfile, withPageAuthRequired } from '@auth0/nextjs-auth0';

const Dashboard = ({ user }: { user: UserProfile }): React.ReactElement => {
  return <p>Welcome, {user.name}!</p>;
};

export const getServerSideProps = withPageAuthRequired();

export default Dashboard;
