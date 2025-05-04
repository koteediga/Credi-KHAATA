import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

const SignUp = () => {
  const { register, handleSubmit } = useForm();
  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    login(data.email);
    navigate('/dashboard');
  };

  return (
    <>
    <h1>SignUp Form</h1>
    <form onSubmit={handleSubmit(onSubmit)} className="p-4">
      <input {...register('email')} placeholder="Email" className="border p-2 block mb-2" />
      <input {...register('password')} placeholder="Password" type="password" className="border p-2 block mb-2" />
      <button type="submit" className="bg-green-500 text-white px-4 py-2">Sign Up</button>
    </form></>
  );
};

export default SignUp;
