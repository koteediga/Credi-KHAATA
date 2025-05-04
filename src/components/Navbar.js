import React from 'react';
import { Link } from 'react-router-dom';

const Navbar=()=>{
  return (
    <nav className="bg-blue-600 p-4">
      <ul className="flex space-x-4 text-white">
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/add-customer">Add Customer</Link></li>
        <li><Link to="/add-loan">Add Loan</Link></li>
        <li><Link to="/">Login</Link></li>
        <li><Link to="/signup">SignUp</Link></li>
        <li><Link to="/customerdetails">customer_details</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
