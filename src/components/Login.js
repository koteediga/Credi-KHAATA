import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../Context/AuthContext';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { login } = useAuth();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('/api/login', {
        email: data.email,
        password: data.password,
      });
      
      // If login is successful, save token and navigate
      const { token } = response.data;
      localStorage.setItem('token', token);
      login(data.email);
      navigate('/dashboard');
    } catch (error) {
      setErrorMessage('Invalid credentials. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4">
      <input
        {...register('email', { required: 'Email is required' })}
        placeholder="Email"
        className="border p-2 block mb-2"
      />
      {errors.email && <span>{errors.email.message}</span>}

      <input
        {...register('password', { required: 'Password is required' })}
        placeholder="Password"
        type="password"
        className="border p-2 block mb-2"
      />
      {errors.password && <span>{errors.password.message}</span>}

      {errorMessage && <span>{errorMessage}</span>}

      <button type="submit" className="bg-blue-500 text-white px-4 py-2">Login</button>
    </form>
  );
};

export default Login;
