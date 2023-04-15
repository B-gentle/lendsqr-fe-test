import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Login from './pages/Login_Page/Login';
import UserDetails from './pages/dashboard/userDetails/UserDetails';
import NoMatchPage from './pages/NoMatchPage';
import Dashboard from './pages/dashboard/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from './pages/Users';
import { TableApiContext } from './Context';
import ProtectedRoutes from './components/auth/ProtectedRoutes';

function App() {
  const client = new QueryClient()

  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <TableApiContext>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route element={<ProtectedRoutes />}>
              <Route path='users' element={<Dashboard />}>
                <Route index element={<Users />} />
                <Route path=':userId' element={<UserDetails />} />
              </Route>
              <Route path='*' element={<NoMatchPage />} />
            </Route>
          </Routes>
        </TableApiContext>
      </QueryClientProvider>
    </div>
  );
}

export default App;
