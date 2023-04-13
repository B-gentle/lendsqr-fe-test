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

function App() {
const client = new QueryClient()

  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <TableApiContext>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='users' element={<Dashboard />}>
            <Route index element={<Users/>} />
          <Route path=':userId' element={<UserDetails/>} />
          </Route>
          <Route path='*' element={<NoMatchPage/>}/>
        </Routes>
        </TableApiContext>
      </QueryClientProvider>
    </div>
  );
}

export default App;
