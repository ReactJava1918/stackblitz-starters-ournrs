// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
 
import Home from './Home'; // Import the Home component
import Dashboard from './Dashboard'; // Import the Dashboard component
import Login from './Login'; // Import the Login component
import PrivateRoute from './PrivateRoute'
import {UserProvider} from './UserProvider'
 


function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dash">Dashboard</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
      <UserProvider>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/dash"
            element={<PrivateRoute component={<Dashboard />} />}
          />
          <Route path="/login" element={<Login />} />
        </Routes>
        </UserProvider>
      
    </Router>
  );
}

export default App;
