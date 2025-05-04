import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';


const AddLoanForm = ({ customerId, onSuccess }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('/api/loans', {
        ...data,
        customerId,
      });
      toast.success('Loan added successfully');
      reset();
      if (onSuccess) onSuccess(); // Refresh list or close modal
    } catch (error) {
      toast.error('Failed to add loan');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 bg-white rounded shadow-md">
      <div className="mb-2">
        <label className="block">Loan Amount</label>
        <input
          {...register('amount', { required: 'Amount is required', valueAsNumber: true })}
          type="number"
          className="border p-2 w-full"
        />
        {errors.amount && <span className="text-red-500">{errors.amount.message}</span>}
      </div>

      <div className="mb-2">
        <label className="block">Interest Rate (%)</label>
        <input
          {...register('interestRate', { required: 'Interest rate is required', valueAsNumber: true })}
          type="number"
          className="border p-2 w-full"
        />
        {errors.interestRate && <span className="text-red-500">{errors.interestRate.message}</span>}
      </div>

      <div className="mb-2">
        <label className="block">Duration (in months)</label>
        <input
          {...register('duration', { required: 'Duration is required', valueAsNumber: true })}
          type="number"
          className="border p-2 w-full"
        />
        {errors.duration && <span className="text-red-500">{errors.duration.message}</span>}
      </div>

      <div className="mb-2">
        <label className="block">Start Date</label>
        <input
          {...register('startDate', { required: 'Start date is required' })}
          type="date"
          className="border p-2 w-full"
        />
        {errors.startDate && <span className="text-red-500">{errors.startDate.message}</span>}
      </div>

      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Add Loan
      </button>
    </form>
  );
};

export default AddLoanForm;
