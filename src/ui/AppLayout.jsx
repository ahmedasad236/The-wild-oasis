import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import { styled } from 'styled-components';

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 18rem 1fr;
  grid-template-rows: auto 1fr;
  min-height: 100vh;
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4.6rem 4.8rem 0.8rem;
  ${'' /* overflow: scroll; */}
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;
function AppLayout() {
  return (
    <StyledAppLayout>
      <Sidebar />
      <Header />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
