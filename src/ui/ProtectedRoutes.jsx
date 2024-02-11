import { useNavigate } from 'react-router-dom';
import { useUser } from '../features/authentication/hooks/useUser';
import Spinner from './Spinner';
import styled from 'styled-components';
import { useEffect } from 'react';

const FullPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: var(--color-grey-50);
`;

function ProtectedRoutes({ children }) {
  const navigate = useNavigate();

  // 1. Load the authenticated user
  const { isLoading, isAuthenticated } = useUser();

  // 2. If the user is not authenticated, redirect to the login page
  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate, isLoading]);

  // 3. If the user is still loading, show a loading spinner
  if (isLoading) {
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );
  }

  // 4. If the user is authenticated, render the children
  if (isAuthenticated) return children;
}

export default ProtectedRoutes;
