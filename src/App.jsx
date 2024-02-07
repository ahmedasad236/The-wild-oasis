import GlobalStyles from './styles/GlobalStyles';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Cabins from './pages/Cabins';
import Account from './pages/Account';
import Login from './pages/Login';
import Users from './pages/Users';
import Bookings from './pages/Bookings';
import Settings from './pages/Settings';
import PageNotFound from './pages/PageNotFound';
import AppLayout from './ui/AppLayout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';
import Booking from './pages/Booking';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 6 * 1000
    }
  }
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route
              index
              element={
                <Navigate
                  replace
                  to="/dashboard"
                />
              }
            />
            <Route
              path="/dashboard"
              element={<Dashboard />}
            />
            <Route
              path="/bookings"
              element={<Bookings />}
            />
            <Route
              path="/bookings/:booking_id"
              element={<Booking />}
            />
            <Route
              path="/cabins"
              element={<Cabins />}
            />
            <Route
              path="/users"
              element={<Users />}
            />
            <Route
              path="/settings"
              element={<Settings />}
            />
            <Route
              path="/account"
              element={<Account />}
            />
          </Route>
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="*"
            element={<PageNotFound />}
          />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{
          margin: '8px'
        }}
        toastOptions={{
          success: {
            duration: 3000
          },
          error: {
            duration: 5000
          },
          style: {
            fontSize: '16px',
            padding: '16px 24px',
            fontWeight: '500',
            backgroundColor: 'var(--color-grey-0)',
            color: 'var(--color-grey-700)'
          }
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
