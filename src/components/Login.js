import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../Context/AuthContext';

const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const { login } = useAuth();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('https://your-api-url/login', data);

      
      login(response.data.user); 
      toast.success('Login successful!');
      navigate('/dashboard');
    } catch (error) {
      toast.error('Invalid email or password');
      reset();
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 shadow-lg rounded-xl mt-10 bg-white">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label>Email</label>
          <input
            type="email"
            {...register('email', { required: true })}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            {...register('password', { required: true })}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
