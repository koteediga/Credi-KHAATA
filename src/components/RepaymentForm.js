import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RepaymentForm = ({ loanId }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await axios.post(`/api/loans/${loanId}/repayments`, data); // Send repayment data to backend
      navigate('/dashboard'); // Redirect after success
    } catch (error) {
      console.error('Error adding repayment:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4">
      <input
        {...register('repaymentAmount', { required: 'Repayment Amount is required' })}
        placeholder="Repayment Amount"
        type="number"
        className="border p-2 block mb-2"
      />
      {errors.repaymentAmount && <span>{errors.repaymentAmount.message}</span>}

      <input
        {...register('repaymentDate', { required: 'Repayment Date is required' })}
        placeholder="Repayment Date"
        type="date"
        className="border p-2 block mb-2"
      />
      {errors.repaymentDate && <span>{errors.repaymentDate.message}</span>}

      <button type="submit" className="bg-blue-500 text-white px-4 py-2">Add Repayment</button>
    </form>
  );
};

export default RepaymentForm;
