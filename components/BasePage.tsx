import styled from 'styled-components';
import Meta from 'components/Meta';

const Page = styled.div`
  min-height: 100vh;
`;

const Main = styled.main`
  margin: 0 auto;
  padding: 2rem;
  max-width: 100%;
  min-height: calc(100vh - 300px);
`;

const BasePage: React.FC = ({ children }) => (
  <Page className="dark">
    <Meta />
    <Main>{children}</Main>
  </Page>
);

export default BasePage;
