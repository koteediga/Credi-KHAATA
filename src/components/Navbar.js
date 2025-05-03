import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4">
      <ul className="flex space-x-4 text-white">
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/add-customer">Add Customer</Link></li>
        <li><Link to="/add-loan">Add Loan</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
