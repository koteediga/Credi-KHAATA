import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

 import Login from './components/Login';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import CustomerDetails from './components/CustomerDetails';
import AddLoanForm from './components/AddLoanForm';
import AddCustomerForm from './components/AddCustomerForm';
//import { ToastContainer } from './components/ToastContainer';
import Navbar from './components/Navbar';
import { AuthProvider } from './Context/AuthContext';


function App() {
  return (
    // <>
    //    <Navbar/>
    //   <h2>kote</h2>
    // </>
    <AuthProvider>
      <Router>
        <Navbar />
               
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/customer/:id" element={<CustomerDetails />} />
          <Route path="/add-loan" element={<AddLoanForm />} />
          <Route path="/add-customers" element={<AddCustomerForm />} />
           <Route path="/customerdetails" element={<CustomerDetails/>}/>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
