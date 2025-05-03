import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function AddCustomerForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post('https://your-api-endpoint/customers', data);
      alert('Customer added successfully');
    } catch (error) {
      alert('Error adding customer');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4 space-y-4">
      <input
        {...register('name', { required: 'Name is required' })}
        placeholder="Customer Name"
        className="w-full p-2 border border-gray-300"
      />
      {errors.name && <p>{errors.name.message}</p>}

      <input
        {...register('phone', { required: 'Phone is required' })}
        placeholder="Phone Number"
        className="w-full p-2 border border-gray-300"
      />
      {errors.phone && <p>{errors.phone.message}</p>}

      <button type="submit" className="w-full bg-blue-600 text-white p-2">Add Customer</button>
    </form>
  );
}

export default AddCustomerForm;
