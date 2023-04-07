import React, {useState} from 'react'
import { Routes, Route } from 'react-router-dom';
import axios  from "axios";
import { QueryClient, QueryClientProvider } from 'react-query';
import Login from './pages/Login_Page/Login';
import UserDetails from './pages/dashboard/UserDetails';
import NoMatchPage from './pages/NoMatchPage';
import Dashboard from './pages/dashboard/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
const client = new QueryClient()
  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='dashboard' element={<Dashboard />}/>
          <Route path='users/:userId' element={<UserDetails/>} />
          <Route path='*' element={<NoMatchPage/>}/>
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
